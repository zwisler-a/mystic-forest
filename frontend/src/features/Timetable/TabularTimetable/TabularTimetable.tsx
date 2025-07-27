import './TabularTimetable.css';
import { actList } from '../TimetablePage/timetable-data';

const TabularTimetable = () => {
    const LOCATIONS = ["Mondhain", "Wurzelwerk", "Workshop-Oase", "Spielwiese", "Schmaus & Trunk"];
    const days = ['Friday', 'Saturday', 'Sunday'];
    const times = Array.from(new Set(actList.flatMap(act => {
        const startHour = act.from.getHours();
        const startMinute = act.from.getMinutes();
        const endHour = act.to.getHours();
        const endMinute = act.to.getMinutes();

        const intervals = [];
        for (let hour = startHour; hour <= endHour; hour++) {
            if (hour === startHour && startMinute >= 30) {
                intervals.push(`${hour}:30`);
            } else if (hour === endHour && endMinute < 30) {
                intervals.push(`${hour}:00`);
            } else {
                intervals.push(`${hour}:00`, `${hour}:30`);
            }
        }
        return intervals;
    }))).sort((a, b) => {
        const [hourA, minuteA] = a.split(':').map(Number);
        const [hourB, minuteB] = b.split(':').map(Number);
        return hourA - hourB || minuteA - minuteB;
    });

    return (
        <div className="tabular-timetable">
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Time</th>
                        {LOCATIONS.map(location => (
                            <th key={location}>{location}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {days.map(day => (
                        times.map(time => (
                            <tr key={`${day}-${time}`}>
                                <td>{day}</td>
                                <td>{time}</td>
                                {LOCATIONS.map(location => (
                                    <td key={`${day}-${time}-${location}`}>
                                        {actList
                                            .filter(act => {
                                                const actStart = act.from.getHours();
                                                const actEnd = act.to.getHours();
                                                const currentHour = parseInt(time.split(':')[0], 10);
                                                return act.location === location && act.day === day && currentHour >= actStart && currentHour <= actEnd;
                                            })
                                            .map(act => (
                                                <div key={`${act.name.en}-${act.from.getTime()}`}>
                                                    <p>{`${act.from.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${act.to.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</p>
                                                    <strong>{act.name.en}</strong>
                                                    <p>{act.artist}</p>
                                                </div>
                                            ))}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabularTimetable;
