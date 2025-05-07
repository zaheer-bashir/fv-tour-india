import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="animate-pulse bg-white p-4 rounded-lg shadow-md">
      <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-10 w-full bg-gray-200 rounded-md"></div>
    </div>
  );
};

export { ProductSkeleton };
