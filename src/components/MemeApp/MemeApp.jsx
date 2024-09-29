import { useEffect } from "react";
import { MEME_BASE_URL } from "../../utils/constants";
import { useState } from "react";
import MemeCard from "./MemeCard";
import ShimmerUI from "./ShimmerUI";

const MemeApp = () => {
  const [memes, setMemes] = useState(null);

  const fetchMemes = async () => {
    const response = await fetch(`${MEME_BASE_URL}/10`);
    const data = await response.json();
    setMemes(data.memes);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="p-5  bg-[#14151a]">
      {!memes ? (
        <ShimmerUI />
      ) : (
        <section className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
          {memes?.map((meme) => (
            <MemeCard meme={meme} key={meme.url} />
          ))}
        </section>
      )}
    </div>
  );
};
export default MemeApp;
