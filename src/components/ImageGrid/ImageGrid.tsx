import React from "react";
// import { Link } from "react-router-dom";
import { ImageData } from "../../data/images";
import "./ImageGrid.css";

interface ImageGridProps {
  images: ImageData[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="myGrid">
      {images.map((image) => (
        //  <Link to={`/image/${image.id}`} key={image.id} className="myCard"></Link>
        <div key={image.id} className="myCard">
          <div>
            <img
              src={image.src}
              alt={image.title}
              className="image"
              loading="lazy"
            />
          </div>
          {/* <div className="textContainer">
            <h3 className="title">{image.title}</h3>
            <p className="description">{image.subtitle}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
