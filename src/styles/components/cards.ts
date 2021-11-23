import { Theme } from "theme-ui";

const cards: Theme["cards"] = {
  base: {
    bg: "white",
    borderRadius: "6px",
    padding: 4,
  },
  primary: {
    variant: "cards.base",
    boxShadow: "medium",
  },
  outlined: {
    variant: "cards.base",
    border: "1px solid",
    borderColor: "muted",
  },
};
export default cards;
