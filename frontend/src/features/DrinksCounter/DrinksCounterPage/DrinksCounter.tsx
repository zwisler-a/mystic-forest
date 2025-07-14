import {useState} from "react";
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import LocalBarRoundedIcon from "@mui/icons-material/LocalBarRounded";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import "./DrinksCounter.css";

function DrinksCounterPage() {
    const [counter, setCounter] = useState(() => {
        return parseInt(localStorage.getItem("drinksCounter") || "0");
    });


    const increment = () => {
        const newCount = counter + 1;
        localStorage.setItem("drinksCounter", newCount.toString());
        setCounter(newCount);
    };
    const decrement = () => {
        const antwort = confirm("Bist du sicher, dass du das löschen möchtest?");
        if (!antwort) return;
        const newCount = Math.max(0, counter - 1);
        localStorage.setItem("drinksCounter", newCount.toString());
        setCounter(newCount);
    };

    const reset = () => {
        const antwort = confirm("Bist du sicher, dass du das löschen möchtest?");
        if (antwort) {
            localStorage.setItem("drinksCounter", "0");
            setCounter(0);
        }
    };

    return <>  <Header/>
        <main>
            <div className="glass-effect card drinks">
                <h2>My Drinks</h2>
                Noting here yet
            </div>
            <BackButton/>
        </main>
    </>

    return (
        <>
            <Header/>
            <main>
                <div className="glass-effect card drinks">
                    <h2>My Drinks: {counter}</h2>
                    <span className="add glass-effect" onClick={() => increment()}>
            <span>
              <LocalBarRoundedIcon
                  style={{fontSize: 60, verticalAlign: "middle"}}
              />
            </span>
            <TouchAppRoundedIcon
                style={{fontSize: 36, verticalAlign: "middle"}}
                className="touch"
            />
          </span>
                    <div>
            <span>
              <RemoveCircleOutlineRoundedIcon onClick={() => decrement()}/>
            </span>
                        <span>
              <RestartAltRoundedIcon onClick={() => reset()}/>
            </span>
                    </div>
                    <p>Unsere Spendenempfehlung basierend auf deiner aktuellen Getränkeanzahl beträgt:</p>
                    <p>{(counter * 0.98).toFixed(2)} EUR <a href="paypal.com"> PayPal </a></p>
                </div>
                <BackButton/>
            </main>
        </>
    );
}

export default DrinksCounterPage;
