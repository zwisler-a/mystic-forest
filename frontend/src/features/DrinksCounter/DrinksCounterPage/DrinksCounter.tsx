import { useState } from "react";
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import LocalBarRoundedIcon from "@mui/icons-material/LocalBarRounded";
import LocalDrinkRoundedIcon from "@mui/icons-material/LocalDrinkRounded";
import SportsBarRoundedIcon from "@mui/icons-material/SportsBarRounded";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import "./DrinksCounter.css";

function DrinksCounterPage() {
  const [countedDrinks, setCountedDrinks] = useState(() => {
    const storedDrinks = localStorage.getItem("countedDrinks");
    return storedDrinks
      ? JSON.parse(storedDrinks)
      : { nonAlcoholic: 0, beer: 0, longDrink: 0 };
  });

  const increment = (drinkType: "nonAlcoholic" | "beer" | "longDrink") => {
    const updatedDrinks = {
      ...countedDrinks,
      [drinkType]: (countedDrinks[drinkType] || 0) + 1,
    };

    localStorage.setItem("countedDrinks", JSON.stringify(updatedDrinks));
    setCountedDrinks(updatedDrinks);
  };

  const decrement = (drinkType: "nonAlcoholic" | "beer" | "longDrink") => {
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
        JSON.stringify({ nonAlcoholic: 0, beer: 0, longDrink: 0 })
      );
      setCountedDrinks({ nonAlcoholic: 0, beer: 0, longDrink: 0 });
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="glass-effect card drinks">
          <h2>My Drinks:</h2>

          <div className="drinks-list">
            {Object.entries(countedDrinks).map(([drinkType, count]) => (
              <div className="drink-item" key={drinkType}>
                <span>
                  <RemoveCircleOutlineRoundedIcon
                    onClick={() =>
                      decrement(
                        drinkType as "nonAlcoholic" | "beer" | "longDrink"
                      )
                    }
                  />
                </span>
                <span
                  className="add glass-effect"
                  onClick={() =>
                    increment(
                      drinkType as "nonAlcoholic" | "beer" | "longDrink"
                    )
                  }
                >
                  <span>
                    {drinkType === "nonAlcoholic" && (
                      <LocalDrinkRoundedIcon
                        style={{ fontSize: 60, verticalAlign: "middle" }}
                      />
                    )}
                    {drinkType === "beer" && (
                      <SportsBarRoundedIcon
                        style={{ fontSize: 60, verticalAlign: "middle" }}
                      />
                    )}
                    {drinkType === "longDrink" && (
                      <LocalBarRoundedIcon
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
                    {drinkType === "nonAlcoholic" && "Non Alcoholic"}
                    {drinkType === "beer" && "Beer"}
                    {drinkType === "longDrink" && "Long Drink"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div>
            <p>
              Unsere Spendenempfehlung basierend auf deiner aktuellen
              Getränkeanzahl beträgt:
            </p>
            <p className="donation-amount">
              EUR {""}
              {(
                countedDrinks.nonAlcoholic * 0.5 +
                countedDrinks.beer * 1.5 +
                countedDrinks.longDrink * 2
              ).toFixed(2)}{" "}
            </p>
            <div className="donation-buttons">
              <button>
                <a
                  href="https://PayPal.Me/mysticForestBirthday"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  via PayPal spenden{" "}
                </a>
              </button>
              <button onClick={reset}>Drinks Counter zurücksetzen</button>
            </div>
          </div>
        </section>
        <BackButton />
      </main>
    </>
  );
}

export default DrinksCounterPage;
