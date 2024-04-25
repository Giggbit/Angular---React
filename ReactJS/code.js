import './App.css';
import { useState, useEffect } from 'react';

function MoonComponent() {
  const [moonPhase, setMoonPhase] = useState({});
  const [phases, setPhases] = useState([]);
  const [days, setDays] = useState([]);
  const [date, setDate] = useState(new Date());

  const url = "https://www.icalendar37.net/lunar/api/?year=[year]&month=[month]&shadeColor=gray&size=150&texturize=true";

  const updateWidgets = () => {
    let day = date.getDay() - 1;
    setDays([day - 1, day, day + 1]);
    let formattedUrl = url.replace("[year]", date.getFullYear().toString()).replace("[month]", (date.getMonth() + 1).toString());
    fetch(formattedUrl)
        .then(response => response.json())
        .then(data => {
          const phase = data.phase;
          setPhases(Object.keys(phase).map(k => phase[k]));
          setMoonPhase(phases[day]);
        });
  };

  useEffect(() => {
    updateWidgets();
  }, [date]);

  const dateChanged = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
  };

  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
      <div>
        <div className="moon-container">
          {phases.length > 0 && days.map((day, index) => (
              <div key={index} className="moon">
                <div dangerouslySetInnerHTML={createMarkup(phases[day].svg)}></div>
                <div className="wax">{phases[day].npWidget}</div>
              </div>
          ))}
        </div>
        <br />
        <input type="date" onChange={dateChanged}  className="calendar"/>
      </div>
  );
}

export default MoonComponent;
