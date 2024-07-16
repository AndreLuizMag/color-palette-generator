import { useState } from "react";
import "./styles.scss";

export const SelectFont = () => {
  const [font, setFont] = useState("'Nunito Sans', sans-serif");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFont = event.target.value;
    setFont(selectedFont);
    document.documentElement.style.setProperty("--font-family", selectedFont);
  };

  return (
    <select
      value={font}
      onChange={handleChange}
      title="Select a font"
      className="select-font cursor-pointer"
    >
      <option value="Nunito Sans, sans-serif">Nunito Sans</option>
      <option value="Merriweather, serif">Merriweather</option>
      <option value="Playwrite PE, cursive">Playwrite Perú</option>
    </select>
  );
};
