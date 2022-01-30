import { styled } from "@stitches/theme";

const Button = styled("button", {
  backgroundColor: "$blue3",
  border: "none",
  borderRadius: "4px",
  color: "$white",
  cursor: "pointer",
  px: "16px",
  py: "10px",
  fontWeight: 600,
  display: "inline-flex",
  transition: "0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-1px)",
    backgroundColor: "$blue4",
  },
  "&:active": {
    transform: "translateY(2px)",
    backgroundColor: "$blue5",
  },
  variants: {
    color: {
      green: {
        backgroundColor: "$green3",
        "&:hover": { backgroundColor: "$green4" },
        "&:active": { backgroundColor: "$green5" },
      },
      red: {
        backgroundColor: "$red5",
        "&:hover": { backgroundColor: "$red6" },
        "&:active": { backgroundColor: "$red7" },
      },
      orange: {
        backgroundColor: "$orange5",
        "&:hover": { backgroundColor: "$orange6" },
        "&:active": { backgroundColor: "$orange7" },
      },
      gray: {
        backgroundColor: "$gray5",
        "&:hover": { backgroundColor: "$gray6" },
        "&:active": { backgroundColor: "$gray7" },
      },
    },
  },
});

export default Button;
