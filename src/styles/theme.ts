import type { Theme } from "theme-ui";
import { colors } from "./colors";
import componentThemes from "./components";
import globalStyles from "./global";
import { typography } from "./typography";

export const theme: Theme = {
  colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    low: "0.2px 0.8px 0.7px hsl(var(--shadow-color) / 0.44),0.2px 1.1px 1px -2.1px hsl(var(--shadow-color) / 0.32), 0.6px 2.7px 2.4px -4.3px hsl(var(--shadow-color) / 0.19)",
    medium:
      "0.2px 0.8px 0.7px hsl(var(--shadow-color) / 0.46), 0.3px 1.5px 1.3px -1.4px hsl(var(--shadow-color) / 0.36), 1px 4.8px 4.2px -2.9px hsl(var(--shadow-color) / 0.27), 2.9px 13.5px 11.8px -4.3px hsl(var(--shadow-color) / 0.17)",
    high: "0.2px 0.8px 0.7px hsl(var(--shadow-color) / 0.43),0.4px 1.7px 1.5px -0.6px hsl(var(--shadow-color) / 0.38),0.7px 3.3px 2.9px -1.2px hsl(var(--shadow-color) / 0.34),1.4px 6.7px 5.9px -1.8px hsl(var(--shadow-color) / 0.29),2.8px 12.9px 11.3px -2.5px hsl(var(--shadow-color) / 0.25),4.9px 22.8px 19.9px -3.1px hsl(var(--shadow-color) / 0.2),8.1px 37.4px 32.7px -3.7px hsl(var(--shadow-color) / 0.16),12.4px 57.8px 50.5px -4.3px hsl(var(--shadow-color) / 0.11)",
  },
  ...typography,
  ...componentThemes,
  styles: globalStyles,
};
