import { styled } from "@stitches/react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  zIndex: 1,
});

export default StyledMenu;
