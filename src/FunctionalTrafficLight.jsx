import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const colors = ['red', 'green', 'yellow', 'black'];
  const [color, setColor] = useState(0);

  const changeColor = () => {
    if (color < 2) {
      setColor(color + 1);
    } else {
      setColor(0);
    }
  };
  return (
    <>
      <div className="traffic-light-box">
        <h2>Functional Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}

          <div
            className={
              color === 0 ? `circle ${colors[0]}` : `circle ${colors[3]}`
            }
          ></div>

          <div
            className={
              color === 2 ? `circle ${colors[2]}` : `circle ${colors[3]}`
            }
          ></div>
          <div
            className={
              color === 1 ? `circle ${colors[1]}` : `circle ${colors[3]}`
            }
          ></div>
        </div>
        <button onClick={changeColor} className="next-state-button">
          Next State
        </button>
      </div>
    </>
  );
};
