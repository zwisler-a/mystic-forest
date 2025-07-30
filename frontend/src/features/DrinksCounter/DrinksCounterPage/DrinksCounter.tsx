import { useState } from "react";
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import LocalBarRoundedIcon from "@mui/icons-material/LocalBarRounded";
import LocalDrinkRoundedIcon from "@mui/icons-material/LocalDrinkRounded";
import SportsBarRoundedIcon from "@mui/icons-material/SportsBarRounded";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import "./DrinksCounter.css";
import { useTranslation } from "react-i18next";

function DrinksCounterPage() {
  const { t } = useTranslation();

  const [countedDrinks, setCountedDrinks] = useState(() => {
    const storedDrinks = localStorage.getItem("countedDrinks");
    return storedDrinks
      ? JSON.parse(storedDrinks)
      : { beers: 0, wineNSparkle: 0, shots: 0, zeroProofs: 0 };
  });

  const increment = (
    drinkType: "zeroProofs" | "beers" | "wineNSparkle" | "shots"
  ) => {
    const updatedDrinks = {
      ...countedDrinks,
      [drinkType]: (countedDrinks[drinkType] || 0) + 1,
    };

    localStorage.setItem("countedDrinks", JSON.stringify(updatedDrinks));
    setCountedDrinks(updatedDrinks);
  };

  const decrement = (
    drinkType: "zeroProofs" | "beers" | "wineNSparkle" | "shots"
  ) => {
    const reply = confirm(
      "Bist du sicher, dass du das löschen möchtest? (Are you sure you want to delete this?)"
    );
    if (!reply) return;
    const updatedDrinks = {
      ...countedDrinks,
      [drinkType]: Math.max(0, (countedDrinks[drinkType] || 0) - 1),
    };
    localStorage.setItem("countedDrinks", JSON.stringify(updatedDrinks));
    setCountedDrinks(updatedDrinks);
  };

  const reset = () => {
    const reply = confirm(
      "Bist du sicher, dass du das zurücksetzen möchtest? (Are you sure you want to reset this?)"
    );
    if (reply) {
      localStorage.setItem(
        "countedDrinks",
        JSON.stringify({ zeroProofs: 0, beers: 0, wineNSparkle: 0, shots: 0 })
      );
      setCountedDrinks({ zeroProofs: 0, beers: 0, wineNSparkle: 0, shots: 0 });
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="glass-effect card drinks">
          <h2>Drinks Counter</h2>

          <div className="drinks-list">
            {Object.entries(countedDrinks).map(([drinkType, count]) => (
              <div className="drink-item" key={drinkType}>
                <span>
                  <RemoveCircleOutlineRoundedIcon
                    onClick={() =>
                      decrement(
                        drinkType as
                          | "beers"
                          | "wineNSparkle"
                          | "shots"
                          | "zeroProofs"
                      )
                    }
                  />
                </span>
                <span
                  className="add glass-effect"
                  onClick={() =>
                    increment(
                      drinkType as
                        | "beers"
                        | "wineNSparkle"
                        | "shots"
                        | "zeroProofs"
                    )
                  }
                >
                  <span>
                    {drinkType === "beers" && (
                      <SportsBarRoundedIcon
                        style={{ fontSize: 60, verticalAlign: "middle" }}
                      />
                    )}
                    {drinkType === "wineNSparkle" && (
                      <LocalBarRoundedIcon
                        style={{ fontSize: 60, verticalAlign: "middle" }}
                      />
                    )}
                    {drinkType === "shots" && (
                      <LocalFireDepartmentRoundedIcon
                        style={{ fontSize: 60, verticalAlign: "middle" }}
                      />
                    )}
                    {drinkType === "zeroProofs" && (
                      <LocalDrinkRoundedIcon
                        style={{ fontSize: 60, verticalAlign: "middle" }}
                      />
                    )}
                  </span>
                  <TouchAppRoundedIcon
                    style={{ fontSize: 36, verticalAlign: "middle" }}
                    className="touch"
                  />
                </span>
                <div className="drink-count">
                  {count as number} x
                  <span>
                    {drinkType === "beers" && "Beers"}
                    {drinkType === "wineNSparkle" && "Wine n Sparkle"}
                    {drinkType === "shots" && "Shots"}
                    {drinkType === "zeroProofs" && "Zero Proofs"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div>
            <p>{t("drinksCounter.donationRecommendation")}</p>
            <p className="donation-amount">
              EUR {""}
              {(
                countedDrinks.zeroProofs * 0.5 +
                countedDrinks.beers * 1 +
                countedDrinks.wineNSparkle * 2 +
                countedDrinks.shots * 0.5
              ).toFixed(2)}{" "}
            </p>
            <div className="donation-buttons">
              <button>
                <a
                  href="https://PayPal.Me/mysticForestBirthday"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("drinksCounter.donate")}
                </a>
              </button>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <KeyboardDoubleArrowDownRoundedIcon />
              </div>
              <button onClick={reset}>{t("drinksCounter.reset")}</button>
            </div>
          </div>
        </section>
        <BackButton />
      </main>
    </>
  );
}

export default DrinksCounterPage;
