import type { Theme } from "theme-ui";

const getButtonColors = (variant: string) => {
  return {
    variant: "buttons.base",
    bg: `${variant}.3`,
    "&:hover": {
      bg: `${variant}.4`,
      transform: "translateY(-1px)",
      boxShadow: "high",
    },
    "&:active": {
      bg: `${variant}.5`,
      transform: "translateY(2px)",
      boxShadow: "low",
    },
  };
};

const buttons: Theme["buttons"] = {
  base: {
    borderRadius: "4px",
    transition: "0.2s ease-in-out",
    cursor: "pointer",
    boxShadow: "medium",
  },
  blue: getButtonColors("blue"),
  orange: getButtonColors("orange"),
  green: getButtonColors("green"),
  red: getButtonColors("red"),
  primary: {
    variant: "buttons.blue",
  },
};

export default buttons;
