import { styled } from "@stitches/react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
});

export default StyledList;
