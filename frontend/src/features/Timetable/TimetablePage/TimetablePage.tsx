import {Act, groupActsByTime, toTime} from "./timetable-data.ts";
import {useEffect, useState} from "react";
import './TimetablePage.css'
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import {useTranslation} from "react-i18next";

function TimetablePage() {
    const [acts] = useState<Map<string, Act[]>>(groupActsByTime());
    const [sortedDates, setSortedDates] = useState<string[]>([]);
    const {i18n} = useTranslation();

    useEffect(() => {
        const sort = [...acts.keys()].sort(key => {
            const a = acts.get(key);
            const b = acts.get(key);
            if (!a) return -1;
            if (!b) return 1;
            return a[0].from.getTime() - b[0].from.getTime();
        });
        setSortedDates(sort)
    }, [acts])

    return (
        <>
            <BackButton/>
            <Header/>
            <main>

                <div className="glass-effect card timetable">
                    <h1>Timetable</h1>
                    {sortedDates.map((time) => {
                        return <div className={"timeblock"}>
                            <div className={"time-heading"}>{time}</div>
                            <div>
                                {acts.get(time)?.map(act => {
                                    return <div className={"act"}>
                                        <h3><span className={"name"}>{act.name}</span> <span
                                            className={"location"}>{act.location}</span>
                                        </h3>
                                        <h4><span>{toTime(act.from)} - {toTime(act.to)}</span> <span>{act.artist}</span></h4>
                                        <p>{act.description && act.description[i18n.language as 'en' | 'de']}</p>
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
