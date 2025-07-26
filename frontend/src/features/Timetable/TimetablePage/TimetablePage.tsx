import {Act, actList, groupActsByTime, toTime} from "./timetable-data.ts";
import {useEffect, useState} from "react";
import './TimetablePage.css'
import BackButton from "../../../shared/BackButton/BackButton.tsx";
import Header from "../../../shared/Header/Header.tsx";
import {useTranslation} from "react-i18next";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import InfoOutlineRounded from "@mui/icons-material/InfoOutlineRounded";
import {Tag} from "../../../shared/Tag/Tag.tsx";

const ACT_TYPES = ["workshop", "food", "music", "entertainment"];
const LOCATIONS = ["Mondhain", "Schmaus & Trunk", "Workshop-Oase", "Wurzelwerk", "Spielwiese"];

interface TimetableFilters {
    type: string[];
    location: string[];
}


function TimetablePage() {
    const [acts, setActs] = useState<Map<string, Act[]>>();
    const [sortedDates, setSortedDates] = useState<string[]>([]);
    const [filters, setFilters] = useState<TimetableFilters>({type: [], location: []});
    const {i18n, t} = useTranslation();

    useEffect(() => {
        const acts = groupActsByTime(actList.filter(act => {
            if (filters.type.length && !filters.type.includes(act.type ?? '')) return false;
            if (filters.location.length && !filters.location.includes(act.location ?? '')) return false;
            return true;
        }), i18n.language);

        const sort = [...acts.keys()].sort((key,key2) => {
            const a = acts.get(key);
            const b = acts.get(key2);
            if (!a) return -1;
            if (!b) return 1;
            return a[0].from.getTime() - b[0].from.getTime();
        });
        setSortedDates(sort)
        setActs(acts);
    }, [filters, i18n.language]);

    const toggleActTypeFilter = (type: string) => {
        const index = filters.type.indexOf(type);
        if (index > -1) {
            filters.type.splice(index, 1);
        } else {
            filters.type.push(type);
        }
        setFilters({...filters});
    }

    const toggleLocationFilter = (type: string) => {
        const index = filters.location.indexOf(type);
        if (index > -1) {
            filters.location.splice(index, 1);
        } else {
            filters.location.push(type);
        }
        setFilters({...filters});
    }

    return (
        <>
            <BackButton/>
            <Header/>
            <main>

                <div className="glass-effect card timetable">
                    <h1>Timetable</h1>
                    <div className={"filters"}>
                        {ACT_TYPES.map((item) =>
                            <Tag key={item} onClick={() => toggleActTypeFilter(item)}
                                 selected={filters.type.includes(item)}>
                                {t('timetable.type.' + item)}
                            </Tag>)}
                    </div>
                    <AlternateEmail></AlternateEmail>
                    <div className={"filters"}>
                        {LOCATIONS.map((item) =>
                            <Tag key={item} onClick={() => toggleLocationFilter(item)}
                                 selected={filters.location.includes(item)}>
                                {item}
                            </Tag>)}
                    </div>
                    <br/>
                    {sortedDates.length == 0 && <>
                        <div className={"no-data"}>
                            {t("timetable.noData")}
                        </div>
                    </>}
                    {sortedDates.map((time) => {
                        return <div key={time} className={"timeblock"}>
                            <div className={"time-heading"}>{time}</div>
                            <div>
                                {acts?.get(time)?.map(act => {
                                    return <div className={"act"} key={act.name + act.from.getTime()}>
                                        <span
                                            className={"location"}><Tag>{t("timetable.type." + act.type)}</Tag> <AlternateEmail></AlternateEmail> <Tag>{act.location}</Tag></span>
                                        <h4><span>{toTime(act.from)} - {toTime(act.to)}</span> <span>{act.artist}</span>
                                        </h4>
                                        <h3><span className={"name"}>{act.name}</span></h3>

                                        <p>{act.description && act.description[i18n.language as 'en' | 'de']}</p>
                                        {act.comment && (<div className={"comment"}><InfoOutlineRounded /> {act.comment}</div>)}
                                        {act.bring && (<div className={"comment"}>{t("timetable.bring")}: {act.bring}</div>)}
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
