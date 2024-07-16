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
      <option value="Nunito, sans-serif">Nunito</option>
      <option value="DM Sans, sans-serif">DM Sans</option>
      <option value="Bai Jamjuree, sans-serif">Bai Jamjuree</option>
      <option value="Roboto Slab, serif">Roboto Slab</option>
      <option value="Aleo, serif">Aleo</option>
    </select>
  );
};
