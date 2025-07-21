import "./FaqPage.css";
import {useTranslation} from "react-i18next";
import FaqPageEn from "./FaqPageEn.tsx";
import FaqPageDe from "./FaqPageDe.tsx";

export const FaqPage = () => {
    const {i18n} = useTranslation();

    if (i18n.language == 'en') return <FaqPageEn/>;
    if (i18n.language == 'de') return <FaqPageDe/>;
}