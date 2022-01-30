import Button from "@components/atoms/Button";
import IconBox from "@components/atoms/IconBox";
import IconCircle from "@components/atoms/IconCircle";
import Box from "@components/particles/Box";
import { useState } from "react";
import { BsClock, BsGeoAlt, BsPerson } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { styled } from "src/stitches.config";
import { Flex } from "theme-ui";

const Title = styled("h1", {
  fontFamily: "Poppins",
  color: "#0D2546",
  fontSize: 24,
  textDecoration: "underline #FAB759 ",
});

const SmallTitle = styled("p", {
  fontSize: 18,
  fontWeight: 600,
  color: "#0D2546",
});

const Paragraph = styled("p", {
  fontSize: 12,
  color: "#4C566A",
  height: "fit-content",
  margin: 0,
});

const DateTime = styled("p", {
  fontSize: 15,
  fontWeight: 600,
  margin: 0,
});

const LocationText = styled("p", {
  fontSize: 18,
  color: "#153E75",
  fontWeight: 600,
});

const Divider = styled("div", {
  width: 2,
  height: 41,
  backgroundColor: "#153E75",
  marginLeft: 20,
});
const ShowButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  fontSize: 20,
});

const Event = () => {
  const [hidden, setHidden] = useState("none");
  const HiddenParagraph = styled("div", {
    display: hidden,
  });

  const showParagraph = () => {
    if (hidden == "none") {
      setHidden("flex");
    } else {
      setHidden("none");
    }
  };

  return (
    <Box
      css={{
        margin: "auto",
        minWidth: 428,
        padding: 30,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Title>Arrangement</Title>
      <Box css={{ width: 400, height: 250, backgroundColor: "#000", display: "flex", margin: "auto" }}></Box>
      <SmallTitle>[X-Sport] Surfetur til Portugal 2022</SmallTitle>
      <Box css={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
        <IconBox css={{ width: "100%", height: "100%", margin: "auto" }} Icon={<BsClock color="#153E75" />} />
        <Box css={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
          <Paragraph>Tirsdag - Oktober 21, 2021</Paragraph>
          <DateTime>18:00 - 23:59</DateTime>
        </Box>
      </Box>

      <Box css={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
        <IconBox css={{ width: "100%", height: "100%", margin: "auto" }} Icon={<BsGeoAlt color="#153E75" />} />
        <Box css={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
          <LocationText>Portugal, Ericeira</LocationText>
        </Box>
      </Box>

      <Box css={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
        <IconBox css={{ width: "100%", height: "100%", margin: "auto" }} Icon={<BsPerson color="#153E75" />} />
        <Box css={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
          <Paragraph>1-3. Klasse</Paragraph>
          <DateTime>10/10</DateTime>
        </Box>
        <Divider />
        <Box css={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
          <Paragraph>3-5. Klasse</Paragraph>
          <DateTime>25/30</DateTime>
        </Box>
        <Divider />
        <Box css={{ display: "flex", flexDirection: "column", marginLeft: 20, justifyContent: "center" }}>
          <Paragraph>Venteliste</Paragraph>
          <DateTime>25</DateTime>
        </Box>
      </Box>
      <Box css={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <Button color="green" css={{ marginRight: 30 }}>
          Meld meg på
        </Button>
        <Button color="blue">Se påmeldte</Button>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", justfyContent: "center", marginTop: 40 }}>
        <Box css={{ display: "flex", width: 300, margin: "auto" }}>
          <Paragraph css={{ fontSize: 18, color: "#153E75", fontWeight: 600 }}>Påmeldingsinformasjon</Paragraph>
          <ShowButton onClick={showParagraph}>
            <AiOutlineDown />
          </ShowButton>
        </Box>

        <HiddenParagraph css={{ width: 400, margin: "auto", flexDirection: "column", marginTop: 30 }}>
          <Paragraph css={{ marginBottom: 5 }}>
            <b>Påmeldingstart:</b> 12:00 Mandag 16. Oktober
          </Paragraph>

          <Paragraph css={{ marginBottom: 5 }}>
            <b>Påmeldingslut:</b> 16:00 Tirsdag 28. Oktober
          </Paragraph>
          <Paragraph>
            <b>Avmeldingsfrist:</b> 21:00 Mandag 31. Oktober
          </Paragraph>
        </HiddenParagraph>
      </Box>
      <Box css={{ textAlign: "center", width: 428, margin: "auto", marginTop: 40 }}>
        <DateTime>Bli kjent med flere jenter på tvers av trinn over en koselig og gratis middag!</DateTime>
        <Paragraph>
          Vi i FeminIT inviterer alle jentene på middag. Her har dere mulighet til å bli kjent med flere av jentene i
          Online. Dere vil bli fordelt på forskjellige restauranter med jenter dere forhåpentligvis ikke har snakket så
          mye med fra før. Dette vil være en ypperlig mulighet for å utvide nettverket ditt, samt si din mening om
          FeminIT som konsept.<br></br> <br></br>Denne middagen vil dere ikke gå glipp av! Meld dere på jenter!!!
          <br></br>
          <br></br> Vi sender mer info på mail når det nærmer seg.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default Event;
