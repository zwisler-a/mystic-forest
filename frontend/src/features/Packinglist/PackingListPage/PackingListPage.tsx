import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import {CheckBox} from "../../../shared/CheckBox/CheckBox.tsx";
import "./PackingListPage.css";

type PackingCategory = {
  key: string; // translation key for the category title
  items: { key: string; id: string }[]; // key: translation key for the item, id: unique id for localStorage
};

const categories: PackingCategory[] = [
  {
    key: "packing.camping",
    items: [
      { key: "packing.tent", id: "tent" },
      { key: "packing.mat", id: "mat" },
      { key: "packing.sleepingBag", id: "sleepingBag" },
      { key: "packing.hammock", id: "hammock" },
      { key: "packing.blanket", id: "blanket" },
      { key: "packing.pillow", id: "pillow" },
      { key: "packing.chair", id: "chair" },
    ],
  },
  {
    key: "packing.clothing",
    items: [
      { key: "packing.clothes", id: "clothes" },
      { key: "packing.outfits", id: "outfits" },
      { key: "packing.comfyClothes", id: "comfyClothes" },
      { key: "packing.sweater", id: "sweater" },
      { key: "packing.rainJacket", id: "rainJacket" },
      { key: "packing.boots", id: "boots" },
      { key: "packing.headwear", id: "headwear" },
      { key: "packing.swimwear", id: "swimwear" },
    ],
  },
  {
    key: "packing.hygiene",
    items: [
      { key: "packing.hygieneProducts", id: "hygieneProducts" },
      { key: "packing.towel", id: "towel" },
      { key: "packing.sunscreen", id: "sunscreen" },
      { key: "packing.mosquito", id: "mosquito" },
      { key: "packing.tissues", id: "tissues" },
      { key: "packing.earplugs", id: "earplugs" },
    ],
  },
  {
    key: "packing.tech",
    items: [
      { key: "packing.flashlight", id: "flashlight" },
      { key: "packing.powerbank", id: "powerbank" },
      { key: "packing.lighter", id: "lighter" },
    ],
  },
  {
    key: "packing.dishes",
    items: [
      { key: "packing.cup", id: "cup" },
      { key: "packing.festivalCup", id: "festivalCup" },
      { key: "packing.plate", id: "plate" },
      { key: "packing.cutlery", id: "cutlery" },
    ],
  },
  {
    key: "packing.drinks",
    items: [
      { key: "packing.sparkling", id: "sparkling" },
      { key: "packing.water", id: "water" },
      { key: "packing.otherDrinks", id: "otherDrinks" },
      { key: "packing.food", id: "food" },
      { key: "packing.buffet", id: "buffet" },
      { key: "packing.snacks", id: "snacks" },
    ],
  },
  {
    key: "packing.fun",
    items: [
      { key: "packing.glitter", id: "glitter" },
      { key: "packing.pen", id: "pen" },
      { key: "packing.goodMood", id: "goodMood" },
      { key: "packing.partyMood", id: "partyMood" },
      { key: "packing.instrument", id: "instrument" },
    ],
  },
  {
    key: "packing.extra",
    items: [
      { key: "packing.pavilion", id: "pavilion" },
    ],
  },
  {
    key: "packing.deco",
    items: [
      { key: "packing.carpets", id: "carpets" },
      { key: "packing.lights", id: "lights" },
      { key: "packing.lanterns", id: "lanterns" },
      { key: "packing.decoPillow", id: "decoPillow" },
      { key: "packing.decoBlanket", id: "decoBlanket" },
      { key: "packing.otherDeco", id: "otherDeco" }
    ],
  },
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

    return (
        <>
            <Header />
            <main>
                <div className="glass-effect card news">
                    <h2>{t("packing.title")}</h2>
                    {categories.map(category => (
                      <div key={category.key}>
                        <h3>{t(category.key)}</h3>
                        <div className="packing-list-items">
                          {category.items.map(item => (
                            <CheckBox
                              key={item.id}
                              isChecked={checkedItems[item.id]}
                              onChange={() => handleToggle(item.id)}
                              label={t(item.key)}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
                <BackButton />
            </main>
        </>
    );
}

export default PackingsListPage;
