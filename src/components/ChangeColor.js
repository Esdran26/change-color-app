import React from 'react';

const ChangeColor = ({ dataColors, handleColor }) => {
  return (
    <ul>
      {
        dataColors.map(color => (
            <li
            key={ color.id }
            style={{
                backgroundColor: color.color
            }}
            onClick={() => handleColor(color.id)}
            >

            </li>
        ))
      }
    </ul>
  );
};

export default ChangeColor;