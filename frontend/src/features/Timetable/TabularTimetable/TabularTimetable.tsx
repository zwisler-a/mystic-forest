import './TabularTimetable.css';
import { actList } from '../TimetablePage/timetable-data';
import React from 'react';

const TabularTimetable = () => {
  const LOCATIONS = ["Mondhain", "Wurzelwerk", "Workshop-Oase", "Spielwiese", "Schmaus & Trunk"];
  const days = ['Friday', 'Saturday', 'Sunday'];

  const allTimes = Array.from(
    new Set(
      actList.flatMap(act => {
        const times: string[] = [];
        const start = new Date(act.from);
        const end = new Date(act.to);
        const current = new Date(start);

        while (current <= end) {
          times.push(`${current.getHours()}:00`);
          current.setHours(current.getHours() + 1);
        }
        return times;
      })
    )
  ).sort((a, b) => {
    const [hourA] = a.split(':').map(Number);
    const [hourB] = b.split(':').map(Number);
    return hourA - hourB;
  });

  const getFilteredTimesForDay = (day: string) => {
    return allTimes.filter(time => {
      const hour = parseInt(time.split(':')[0], 10);
      if (day === 'Friday') return hour >= 18;
      if (day === 'Sunday') return hour < 14;
      return true;
    });
  };

  const isActInSlot = (act: any, day: string, hour: number, location: string) => {
    const actStart = new Date(act.from);
    const actEnd = new Date(act.to);
    const currentSlot = new Date(actStart);
    currentSlot.setHours(hour, 0, 0, 0);

    const currentDay = currentSlot.toLocaleDateString('en-US', { weekday: 'long' });
    const slotInRange = currentSlot >= actStart && currentSlot < actEnd;
    const isCorrectLocation = act.location === location;

    return slotInRange && currentDay === day && isCorrectLocation;
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
            <React.Fragment key={`day-${day}`}>
              <tr className="day-header">
                <td colSpan={LOCATIONS.length + 1}>{day}</td>
              </tr>
              {getFilteredTimesForDay(day).map(time => {
                const hour = parseInt(time.split(':')[0], 10);
                return (
                  <tr key={`${day}-${time}`}>
                    <td>{time}</td>
                    {LOCATIONS.map(location => {
                      const actsForSlot = actList.filter(act =>
                        isActInSlot(act, day, hour, location)
                      );
                      return (
                        <td key={`${day}-${time}-${location}`}>
                          {actsForSlot.map(act => (
                            <div key={`${act.name.en}-${act.from.getTime()}`}>
                              <p className="time">
                                {`${act.from.toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })} - ${act.to.toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}`}
                              </p>
                              <strong>{act.name.en}</strong>
                              {act.artist && <p className="artist">{act.artist}</p>}
                            </div>
                          ))}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabularTimetable;