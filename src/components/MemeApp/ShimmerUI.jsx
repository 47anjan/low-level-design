const ShimmerUI = () => {
  return Array(10)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="rounded-md h-fit bg-[#1c1f26] p-4 border border-[#c2caf529]"
      >
        <div className="h-72 sm:h-60 bg-gray-500 animate-pulse"></div>
      </div>
    ));
};
export default ShimmerUI;
