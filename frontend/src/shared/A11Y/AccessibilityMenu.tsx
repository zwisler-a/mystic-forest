import { useEffect, useRef, useState } from "react";
import "./AccessibilityMenu.css";
import AccessibilityIcon from "@mui/icons-material/AccessibilityNewOutlined";
import { Toggle } from "../Toggle/Toggle";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";

export const AccessibilityMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(() => {
    const storedValue = localStorage.getItem("isHighContrast");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const [isBigText, setIsBigText] = useState(() => {
    const storedValue = localStorage.getItem("isBigText");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [t, i18n] = useTranslation("translation");

  const menuRef = useRef<any>(null);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", isHighContrast);
    document.body.classList.toggle("bigger-text", isBigText);
    localStorage.setItem("isHighContrast", JSON.stringify(isHighContrast));
    localStorage.setItem("isBigText", JSON.stringify(isBigText));
    localStorage.setItem("language", i18n.language);
  }, [isHighContrast, isBigText, i18n.language]);

  const toggleContrast = () => {
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    document.body.classList.toggle("high-contrast", newState);
  };

  const toggleBiggerFont = () => {
    const newState = !isBigText;
    setIsBigText(newState);
    document.body.classList.toggle("bigger-text", newState);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="accessibility-menu" ref={menuRef}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <AccessibilityIcon />
        </button>
        {menuOpen && (
          <div className="accessibility-options glass-effect">

            <Toggle
              onChange={toggleContrast}
              label={t("a11y.highContrast")}
              isChecked={isHighContrast}
            ></Toggle>

            <Toggle
              onChange={toggleBiggerFont}
              label={t("a11y.biggerText")}
              isChecked={isBigText}
            ></Toggle>

            <LanguageToggle lang={i18n.language} setLang={lang => i18n.changeLanguage(lang)} />
            <button>Download App</button>


          </div>
        )}
      </div>
    </>
  );
};
