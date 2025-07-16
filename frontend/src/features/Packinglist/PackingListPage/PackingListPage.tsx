import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import { Toggle } from "../../../shared/Toggle/Toggle.tsx";
import {ENABLED_FEATURES} from "../../../features.ts";
import UnderConstruction from "../../../shared/UnderConstructions/UnderConstruction.tsx";

type PackingItem = {
    id: string;
    labelKey: string;
};

const itemList: PackingItem[] = [
    { id: "toothbrush", labelKey: "packing.toothbrush" },
];

const STORAGE_KEY = "packingListChecked";

function PackingsListPage() {
    const { t } = useTranslation();
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            setCheckedItems(JSON.parse(saved));
        }
    }, []);

    const handleToggle = (id: string) => {
        const updated = { ...checkedItems, [id]: !checkedItems[id] };
        setCheckedItems(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    if(!ENABLED_FEATURES["PACKING"]) return <UnderConstruction />;
    return (
        <>
            <Header />
            <main>
                <div className="glass-effect card news">
                    <h2>{t("packing.title")}</h2>
                    {itemList.map(item => (
                        <Toggle
                            key={item.id}
                            isChecked={checkedItems[item.id]}
                            onChange={() => handleToggle(item.id)}
                            label={t(item.labelKey)}
                        />
                    ))}
                </div>
                <BackButton />
            </main>
        </>
    );
}

export default PackingsListPage;
