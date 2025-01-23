const Shimmer = () => {
  return (
    <div
      className="m-4 p-4 w-64 rounded-lg bg-gray-100 animate-pulse"
      data-testid="shimmerCard"
    >
      {/* Image Shimmer */}
      <div className="rounded-lg h-40 w-56 bg-gray-300"></div>

      {/* Title Shimmer */}
      <div className="mt-4 h-6 w-3/4 bg-gray-300 rounded"></div>

      {/* Rating and SLA Shimmer */}
      <div className="flex items-center space-x-2 mt-4">
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-16 bg-gray-300 rounded"></div>
      </div>

      {/* Cuisines Shimmer */}
      <div className="mt-2 h-4 w-full bg-gray-300 rounded"></div>

      {/* Area Name Shimmer */}
      <div className="mt-2 h-4 w-3/4 bg-gray-300 rounded"></div>
    </div>
  );
};

export default Shimmer;