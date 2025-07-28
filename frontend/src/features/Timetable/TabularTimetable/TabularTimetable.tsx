import './TabularTimetable.css';
import { actList } from '../TimetablePage/timetable-data';

const TabularTimetable = () => {
    const LOCATIONS = ["Mondhain", "Wurzelwerk", "Workshop-Oase", "Spielwiese", "Schmaus & Trunk"];
    const days = ['Friday', 'Saturday', 'Sunday'];

    const allTimes = Array.from(new Set(actList.flatMap(act => {
        const startHour = act.from.getHours();
        const endHour = act.to.getHours();
        return Array.from({ length: endHour - startHour + 1 }, (_, i) => `${startHour + i}:00`);
    }))).sort((a, b) => {
        const [hourA] = a.split(':').map(Number);
        const [hourB] = b.split(':').map(Number);
        return hourA - hourB;
    });

    const getFilteredTimesForDay = (day: string) => {
        return allTimes.filter(time => {
            const hour = parseInt(time.split(':')[0], 10);
            if (day === 'Friday') return hour >= 18;
            if (day === 'Sunday') return hour < 15;
            return true;
        });
    };

    return (
        <div className="tabular-timetable">
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        {LOCATIONS.map(location => (
                            <th key={location}>{location}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {days.map(day => (
                        <>
                            <tr className="day-header" key={`header-${day}`}>
                                <td colSpan={LOCATIONS.length + 1}>{day}</td>
                            </tr>
                            {getFilteredTimesForDay(day).map(time => (
                                <tr key={`${day}-${time}`}>
                                    <td>{time}</td>
                                    {LOCATIONS.map(location => (
                                        <td key={`${day}-${time}-${location}`}>
                                            {actList
                                                .filter(act => {
                                                    const actStart = act.from.getHours();
                                                    const actEnd = act.to.getHours() - 1;
                                                    const currentHour = parseInt(time.split(':')[0], 10);
                                                    return act.location === location && act.day === day && currentHour >= actStart && currentHour <= actEnd;
                                                })
                                                .map(act => (
                                                    <div key={`${act.name.en}-${act.from.getTime()}`}>
                                                        <p className="time">{`${act.from.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${act.to.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</p>
                                                        <strong>{act.name.en}</strong>
                                                        <p className="artist">{act.artist}</p>
                                                    </div>
                                                ))}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabularTimetable;