const MemeCard = ({ meme }) => {
  return (
    <article
      key={meme?.url}
      className="rounded-md cursor-pointer h-fit bg-[#1c1f26] p-5 border border-[#c2caf529]"
    >
      <img
        src={meme?.preview[2]}
        alt={meme?.title}
        className="w-full h-auto sm:h-60 object-contain"
      />
    </article>
  );
};
export default MemeCard;
