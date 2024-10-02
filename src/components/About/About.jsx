import { useLanguage } from "../../contexts/LanguageProvider";
import aboutData from "../../utils/about-data";

aboutData;

const About = () => {
  const { language } = useLanguage();

  const aboutContent = aboutData[language];

  return (
    <section>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            {aboutContent.title}
          </h1>
          <div>
            {aboutContent.paragraphs.map((item, index) => (
              <p key={index} className="text-lg text-gray-600 mb-4">
                {item?.content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
