import type { Theme } from "theme-ui";

const textareaTheme: Theme["forms"] = {
  forms: {
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
  },
};

export default textareaTheme;
