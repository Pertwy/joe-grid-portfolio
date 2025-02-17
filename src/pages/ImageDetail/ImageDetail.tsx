import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../../data/images';

const ImageDetail: React.FC = () => {
  const { id } = useParams();
  const image = images.find(img => img.id === Number(id));

  if (!image) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Image not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {image.title}
        </h1>
        
        <div className="flex justify-center">
          <div className="aspect-[16/9] w-full lg:w-2/3 overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <p className="mt-4 text-lg text-gray-600">
          {image.subtitle}
        </p>
      </div>
    </div>
  );
};

export default ImageDetail