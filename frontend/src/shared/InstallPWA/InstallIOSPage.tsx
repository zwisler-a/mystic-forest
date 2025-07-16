import { useTranslation } from "react-i18next";
import Header from "../Header/Header.tsx";
import BackButton from "../BackButton/BackButton.tsx";


function InstallIOSPage() {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <main>
                <div className="glass-effect card" style={{textAlign: "start"}}>
                    <h2>{t("pwa.install_ios_title")}</h2>
                    <ol>
                        <li>{t("pwa.install_ios_step1")}</li>
                        <li>{t("pwa.install_ios_step2")}</li>
                        <li>{t("pwa.install_ios_step3")}</li>
                    </ol>
                </div>
                <BackButton />
            </main>
        </>
    );
}

export default InstallIOSPage;