import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { comics } from "./comic-data";
import "./Comics.css";

const Comics: React.FC = () => {
  const [selectedComic, setSelectedComic] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedComic === null) return;

      if (e.key === "ArrowLeft") {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "ArrowRight") {
        setCurrentPage((prev) =>
          prev <
          (comics.find((c) => c.id === selectedComic)?.pages.length || 1) - 1
            ? prev + 1
            : prev
        );
      } else if (e.key === "Escape") {
        setSelectedComic(null);
        setCurrentPage(0);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedComic]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = (length: number) => {
    setCurrentPage((prev) => (prev < length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {comics.map((comic) => (
            <div key={comic.id} className="flex flex-col container">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 text-center">
                {comic.title}
              </h3>
              <div
                className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedComic(comic.id);
                  setCurrentPage(0);
                }}
              >
                <img
                  src={comic.image}
                  alt={comic.title}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      {selectedComic !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => {
              setSelectedComic(null);
              setCurrentPage(0);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrevPage}
            className="absolute left-4 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <div className="relative w-full max-w-5xl aspect-[4/3] mx-4">
            <img
              src={
                comics.find((c) => c.id === selectedComic)?.pages[currentPage]
                  .image
              }
              alt={`Page ${currentPage + 1}`}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              Page {currentPage + 1} of{" "}
              {comics.find((c) => c.id === selectedComic)?.pages.length}
            </div>
          </div>

          <button
            onClick={() =>
              handleNextPage(
                comics.find((c) => c.id === selectedComic)?.pages.length || 1
              )
            }
            className="absolute right-4 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              currentPage + 1 ===
              comics.find((c) => c.id === selectedComic)?.pages.length
            }
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Comics;
