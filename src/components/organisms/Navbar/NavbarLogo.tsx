import { Box } from "@components/primitives";
import { styled } from "@stitches/react";
import Image from "next/image";
import OnlineIcon from "@components/atoms/OnlineIcon";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Box css={{ width: "100px", height: "45px" }}>
      <Link href="/">
        <a>
          {" "}
          <OnlineIcon />
        </a>
      </Link>
    </Box>
  );
};

export default NavbarLogo;
