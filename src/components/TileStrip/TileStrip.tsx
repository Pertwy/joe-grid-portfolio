import React, { useEffect, useRef, useState } from "react";
import john from "/images/Projects/tileGame/john.png";
import joe from "/images/Projects/tileGame/joe.png";
import james from "/images/Projects/tileGame/james.png";
import niki from "/images/Projects/tileGame/niki.png";
import "./TileStrip.css";

const SPRITES = [
  { name: "John", src: john },
  { name: "Joe", src: joe },
  { name: "James", src: james },
  { name: "Niki", src: niki },
];

const ROWS = 5;
const STEP_MS = 1000;
const DIRECTIONS = [
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 1, y: 0 },
];

type Cell = { x: number; y: number };
type Layout = { cols: number; rows: number; cell: number; offsetX: number };
type SpriteState = { cell: Cell };

const key = (c: Cell) => `${c.x},${c.y}`;
const shuffle = <T,>(items: T[]) => {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const measure = (width: number): Layout => {
  const cell = width < 768 ? 40 : 56;
  const cols = Math.max(SPRITES.length, Math.floor(width / cell));
  return { cols, rows: ROWS, cell, offsetX: (width - cols * cell) / 2 };
};

// A black strip divided into an invisible grid of squares. Each Tile Game
// character jumps one square up, down, left or right every second, on its
// own beat, never leaving the strip or sharing a square with another.
const TileStrip: React.FC = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const spriteRefs = useRef<(HTMLImageElement | null)[]>([]);
  const sprites = useRef<SpriteState[]>([]);
  const [layout, setLayout] = useState<Layout | null>(null);

  // Work out the grid from the strip's width, and again when it changes.
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const update = () =>
      setLayout((prev) => {
        const next = measure(strip.clientWidth);
        return prev &&
          prev.cols === next.cols &&
          prev.cell === next.cell &&
          prev.offsetX === next.offsetX
          ? prev
          : next;
      });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(strip);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!layout) return;
    const { cols, rows, cell, offsetX } = layout;
    const inBounds = (c: Cell) =>
      c.x >= 0 && c.x < cols && c.y >= 0 && c.y < rows;

    const draw = (i: number) => {
      const el = spriteRefs.current[i];
      const s = sprites.current[i];
      if (!el || !s) return;
      el.style.width = `${cell}px`;
      el.style.height = `${cell}px`;
      el.style.transform = `translate(${offsetX + s.cell.x * cell}px, ${
        s.cell.y * cell
      }px)`;
    };

    // Start on random squares, or keep squares that still fit after a resize.
    const taken = new Set<string>();
    const free = shuffle(
      Array.from({ length: cols * rows }, (_, n) => ({
        x: n % cols,
        y: Math.floor(n / cols),
      }))
    );
    SPRITES.forEach((_, i) => {
      const current = sprites.current[i]?.cell;
      let start =
        current && inBounds(current) && !taken.has(key(current))
          ? current
          : undefined;
      if (!start) start = free.find((c) => !taken.has(key(c)))!;
      taken.add(key(start));
      sprites.current[i] = { cell: start };
      draw(i);
    });

    const step = (i: number) => {
      const s = sprites.current[i];
      const occupied = new Set(
        sprites.current.filter((_, j) => j !== i).map((o) => key(o.cell))
      );
      const options = DIRECTIONS.map((d) => ({
        x: s.cell.x + d.x,
        y: s.cell.y + d.y,
      })).filter((c) => inBounds(c) && !occupied.has(key(c)));
      if (options.length === 0) return; // boxed in: wait for the next beat
      const next = options[Math.floor(Math.random() * options.length)];
      sprites.current[i] = { cell: next };
      draw(i);
    };

    // Spread the beats evenly through each second, in a random order and
    // with a little jitter, so no two sprites ever move together.
    const slot = STEP_MS / SPRITES.length;
    const timers: number[] = [];
    shuffle(SPRITES.map((_, i) => i)).forEach((i, n) => {
      const delay = n * slot + Math.random() * slot * 0.5;
      timers.push(
        window.setTimeout(() => {
          step(i);
          timers.push(window.setInterval(() => step(i), STEP_MS));
        }, delay)
      );
    });

    return () => timers.forEach((t) => (clearTimeout(t), clearInterval(t)));
  }, [layout]);

  return (
    <div
      ref={stripRef}
      className="tileStrip"
      style={{ height: layout ? layout.rows * layout.cell : ROWS * 56 }}
      aria-hidden="true"
    >
      {SPRITES.map((sprite, i) => (
        <img
          key={sprite.name}
          ref={(el) => (spriteRefs.current[i] = el)}
          src={sprite.src}
          alt=""
          className="tileSprite"
          draggable={false}
        />
      ))}
    </div>
  );
};

export default TileStrip;
