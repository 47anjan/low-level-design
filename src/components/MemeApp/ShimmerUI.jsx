const ShimmerUI = () => {
  return (
    <section className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="rounded-md h-fit bg-[#1c1f26] p-5 border border-[#c2caf529]"
          >
            <div className="h-72 sm:h-60 bg-gray-500 animate-pulse"></div>
          </div>
        ))}
    </section>
  );
};
export default ShimmerUI;
