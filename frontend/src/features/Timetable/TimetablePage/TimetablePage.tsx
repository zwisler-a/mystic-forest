import {Act, groupActsByTime, toTime} from "./timetable-data.ts";
import {useState} from "react";
import './TimetablePage.css'
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";

function TimetablePage() {
    const [acts] = useState<Map<string, Act[]>>(groupActsByTime());

    return (
        <>

            <BackButton/>
            <Header/>
            <main>

                <div className="glass-effect card timetable">
                    <h1>Timetable</h1>
                    {[...acts.keys()].map((time) => {
                        return <div className={"timeblock"}>
                            <div className={"time-heading"}>{time}</div>
                            <div>
                                {acts.get(time)?.map(act => {
                                    return <div className={"act"}>
                                        <h3><span>{act.name}</span> <span className={"location"}>{act.location}</span></h3>
                                        <h4>{toTime(act.from)} - {toTime(act.to)}</h4>
                                        <p>{act.description}</p>
                                    </div>;
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </main>
        </>
    );
}

export default TimetablePage;
