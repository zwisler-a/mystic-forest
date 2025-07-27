import './TabularTimetable.css';
import { actList, LOCATIONS, toTime } from '../TimetablePage/timetable-data';

const TabularTimetable = () => {
    const days = ['Friday', 'Saturday', 'Sunday'];
    const times = Array.from(new Set(actList.map(act => toTime(act.from)))).sort();

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
                                            .filter(act => toTime(act.from) === time && act.location === location && act.day === day)
                                            .map(act => (
                                                <div key={`${act.name.en}-${act.from.getTime()}`}>
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
