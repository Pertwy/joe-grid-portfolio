import React, { useEffect, useState } from "react";
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

// Deal images out left to right, so the grid reads across rows
// (1, 2, 3 / 4, 5, 6 …) while keeping the staggered masonry look.
const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const columnCount = useColumnCount();
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
                className="image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
