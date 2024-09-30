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
    console.log(data);

    setMemes(data.memes);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="bg-[#14151a]">
      <div className="max-w-7xl mx-auto p-5  ">
        <section className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
          {!memes ? (
            <ShimmerUI />
          ) : (
            memes?.map((meme) => <MemeCard meme={meme} key={meme.url} />)
          )}
        </section>
      </div>
    </div>
  );
};
export default MemeApp;
