import "./LanguageToggle.css";

export const LanguageToggle = ({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (lang: string) => void;
}) => {
  return (
    <div
      className="language-toggle"
      onClick={() => setLang(lang === "de" ? "en" : "de")}
    >
      <div className={lang == "de" ? "active" : "inactive"}>De</div>
      <div className={lang == "en" ? "active" : "inactive"}>En</div>
    </div>
  );
};
