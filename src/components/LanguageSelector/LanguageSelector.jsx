import { useLanguage } from "../../contexts/LanguageProvider";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="es">Spanish</option>
      <option value="ru">Russian</option>
    </select>
  );
};
export default LanguageSelector;
