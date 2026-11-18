import React, { useCallback, useEffect, useState } from "react";
import { ImageData } from "../../data/images";
import "./ImageGrid.css";

interface ImageGridProps {
  images: ImageData[];
}

// Keep in sync with the breakpoints in ImageGrid.css
const TABLET = "(min-width: 768px)";
const DESKTOP = "(min-width: 992px)";

const getColumnCount = () => {
  if (window.matchMedia(DESKTOP).matches) return 3;
  if (window.matchMedia(TABLET).matches) return 2;
  return 1;
};

const useColumnCount = () => {
  const [count, setCount] = useState(getColumnCount);

  useEffect(() => {
    const update = () => setCount(getColumnCount());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
};

// How long to hold the grid back waiting for every image. After this,
// images that are still loading fade in on their own as they arrive.
const REVEAL_TIMEOUT_MS = 2500;

// Fade the grid in together once every image has loaded, instead of
// images popping in one at a time.
const useReveal = (count: number) => {
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set());
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setTimedOut(true), REVEAL_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, []);

  const markLoaded = useCallback((id: number) => {
    setLoaded((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  }, []);

  const allLoaded = loaded.size >= count;
  const isVisible = (id: number) => allLoaded || (timedOut && loaded.has(id));
  return { markLoaded, isVisible };
};

// Deal images out left to right, so the grid reads across rows
// (1, 2, 3 / 4, 5, 6 …) while keeping the staggered masonry look.
const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const columnCount = useColumnCount();
  const { markLoaded, isVisible } = useReveal(images.length);
  const columns: ImageData[][] = Array.from({ length: columnCount }, () => []);
  images.forEach((image, i) => columns[i % columnCount].push(image));

  return (
    <div className="myGrid">
      {columns.map((column, c) => (
        <div key={c} className="myColumn">
          {column.map((image) => (
            <div key={image.id} className="myCard">
              <img
                src={image.src}
                alt={image.title}
                width={image.width}
                height={image.height}
                className={`image gridImage${
                  isVisible(image.id) ? " gridImage--visible" : ""
                }`}
                // Catch images that finished loading before React attached
                // onLoad, such as ones already in the browser cache.
                ref={(el) => {
                  if (el?.complete && el.naturalWidth) markLoaded(image.id);
                }}
                onLoad={() => markLoaded(image.id)}
                onError={() => markLoaded(image.id)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
