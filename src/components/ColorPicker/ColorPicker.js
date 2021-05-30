import React from "react";
import "./ColorPicker.css";
// const styles = {
//     option: {
//         display: 'inline-block',
//         width: 60,
//         height: 50,
//         margin: 4
//     }
// }

const ColorPicker = ({ options }) => {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            className="ColorPicker__option"
            style={{ backgroundColor: color }}
            key={label}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
