import { HSLColor } from "./interface";
import { Theme } from "./type";

export const colorPaletteGenerator = (hslColor: HSLColor): Theme => {
  let lightStr: string = hslColor.l.toString();
  const firstCaractere: number = parseInt(lightStr.charAt(0), 10);
  const lastCaractere: number = parseInt(lightStr.charAt(1), 10);

  const variant = generateVariant(lastCaractere);

  if (hslColor.l > 9) {
    if (hslColor.l >= 40 && hslColor.l <= 59) {
      return {
        base: parseInt(`${firstCaractere}${lastCaractere}`, 10),
        l10: parseInt(`1${lastCaractere}`, 10),
        l20: parseInt(`2${lastCaractere}`, 10),
        l30: parseInt(`3${lastCaractere}`, 10),
        l50: parseInt(`${firstCaractere}${lastCaractere}`, 10), // Same as base in this case
        l60: parseInt(`6${lastCaractere}`, 10),
        l70: parseInt(`7${lastCaractere}`, 10),
        l80: parseInt(`8${variant[0]}`, 10),
        l802: parseInt(`8${variant[1]}`, 10),
        l90: parseInt(`9${variant[0]}`, 10),
        l902: parseInt(`9${variant[1] === 9 ? "8" : variant[1]}`, 10),
      };
    } else {
      return {
        base: parseInt(`${firstCaractere}${lastCaractere}`, 10),
        l10: parseInt(`1${lastCaractere}`, 10),
        l20: parseInt(`2${lastCaractere}`, 10),
        l30: parseInt(`3${lastCaractere}`, 10),
        l50: parseInt(`5${lastCaractere}`, 10),
        l60: parseInt(`6${lastCaractere}`, 10),
        l70: parseInt(`7${lastCaractere}`, 10),
        l80: parseInt(`8${variant[0]}`, 10),
        l802: parseInt(`8${variant[1]}`, 10),
        l90: parseInt(`9${variant[0]}`, 10),
        l902: parseInt(`9${variant[1] === 9 ? "8" : variant[1]}`, 10),
      };
    }
  } else {
    // Handle other ranges here
    return {
      base: 0,
      l10: 10,
      l20: 20,
      l30: 30,
      l50: 50,
      l60: 60,
      l70: 70,
      l80: parseInt(`8${variant[0]}`, 10),
      l802: parseInt(`8${variant[1]}`, 10),
      l90: parseInt(`9${variant[0]}`, 10),
      l902: parseInt(`9${variant[1] === 9 ? "8" : variant[1]}`, 10),
    };
  }
};

const generateVariant = (x: number) => {
  if (x <= 4) {
    return [x, x + 5];
  } else {
    return [x - 5, x];
  }
};

export const generateBackground = (h: number, s: number, l: number) => {
  return `hsl(${h}, ${s}%, ${l}%)`;
};
