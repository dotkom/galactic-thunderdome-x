import React from "react";
import { styled } from "@stitches/theme";
import { underlineText } from "@components/atoms/stories/Text.stories";

//import SocialIcons from './SocialIcons';

const Foot = styled("footer", {
  margin: 0,
  color: "White",
  height: 250,
  backgroundColor: "#0D2546",
});

const A = styled("a", {
  fontSize: "20px",
  padding: "1px 10px",
  color: "White",
  borderRight: "solid 2px White;",

  fontFamily: "Poppins",
  fontWeight: 600,
  textDecoration: "none",
});

const Footer = () => (
  <Foot>
    <div style={{ height: 100 }}>
      {/* 
      <SocialIcons />
    */}
    </div>
    <div>
      <A href="www.1001spill.no">Besøksadresse</A>

      <A href="www.1001spill.no">Kontaktinfo</A>

      <A style={{ borderRight: "none" }} href="www.1001spill.no">
        Post og Faktura
      </A>
    </div>

    <p>
      Feil på nettsiden?
      <br />
      Ta kontakt med <a href="mailto:dotkom@online.ntnu.no">Dotkom</a>
    </p>
  </Foot>
);

export default Footer;
