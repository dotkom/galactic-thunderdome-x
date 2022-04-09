import DesktopNavigation, {
  ContentList,
  ContentListItem,
  ContentListItemCallout,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@components/organisms/Navbar/DesktopNavigation";
import { Box } from "@components/primitives";
import { useEffect, useState } from "react";
import MainAvatar from "./Avatar";
import MobileDropdown from "./MobileDropdown";
import NavbarLogo from "./NavbarLogo";
import DropdownMenuDemo from "./UserDropdown";

const Navbar = () => {
  const [color, setColor] = useState("transparent");

  const changeNavbarColor = () => setColor("#fff");
  const revertNavbarColor = () => setColor("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        changeNavbarColor();
      }
      if (window.scrollY < 40) {
        revertNavbarColor();
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      css={{
        boxShadow: `0 0.1px 0.2px #0d0d0d`,
        height: "70px",
        backgroundColor: color,
        width: "100vw",
        display: "flex",
        zIndex: 100,
        position: "fixed",
        top: 0,
      }}
    >
      <Box
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr 1fr",
          margin: "auto",
          width: "80%",
          "@media only screen and (max-width: 1200px)": { width: "90%" },
          "@media only screen and (max-width: 900px)": { display: "none" },
        }}
      >
        <Box css={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <NavbarLogo />
        </Box>
        <DesktopNavigation />
        <Box css={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <DropdownMenuDemo />
        </Box>
      </Box>
      <Box
        css={{
          display: "none",
          width: "100%",
          "@media only screen and (max-width: 900px)": {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          },
        }}
      >
        <MobileDropdown />
      </Box>
    </Box>
  );
};

export default Navbar;
