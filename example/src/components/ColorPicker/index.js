import React from 'react';

export default ({colors, setColors}) => {

  const handleColorChange = e => {
    const { name, value } = e.target;
    setColors(colors=>({...colors, [name]: value}))
  }

  return (
    <div className="colors">
      { Object.keys(colors).map(color => (
        <label key={color} htmlFor="primaryColor">
          {color[0].toUpperCase() + color.slice(1).replace('Color','')}
          <input 
            onChange={handleColorChange} 
            type="color" 
            value={colors[color]} 
            name={color}
          />
        </label>
      ))}
    </div>
  );
}
