import { ConfigType } from "@stitches/react/types/config";

const blue = {
  blue1: "#0D2546",
  blue2: "#11325E",
  blue3: "#153E75",
  blue4: "#2C5183",
  blue5: "#446591",
  blue6: "#5B789E",
  blue7: "#738BAC",
  blue8: "#8A9FBA",
  blue9: "#A1B2C8",
  blue10: "#B9C5D6",
  blue11: "#D0D8E3",
  blue12: "#E8ECF1",
};
const orange = {
  orange1: "#966E35",
  orange2: "#C89247",
  orange3: "#FAB759",
  orange4: "#FBBE6A",
  orange5: "#FBC57A",
  orange6: "#FCCD8B",
  orange7: "#FCD49B",
  orange8: "#FDDBAC",
  orange9: "#FDE2BD",
  orange10: "#FEE9CD",
  orange11: "#FEF1DE",
  orange12: "#FFF8EE",
};

const green = {
  green1: "#425845",
  green2: "#698C6E",
  green3: "#83AF89",
  green4: "#8FB795",
  green5: "#9CBFA1",
  green6: "#A8C7AC",
  green7: "#B5CFB8",
  green8: "#C1D7C4",
  green9: "#CDDFD0",
  green10: "#DAE7DC",
  green11: "#E6EFE7",
  green12: "#F3F7F3",
};

const red = {
  red1: "#811722",
  red2: "#AC1E2D",
  red3: "#D72638",
  red4: "#DB3C4C",
  red5: "#DF5160",
  red6: "#E36774",
  red7: "#E77D88",
  red8: "#EB939C",
  red9: "#EFA8AF",
  red10: "#F3BEC3",
  red11: "#F7D4D7",
  red12: "#FBE9EB",
};

const gray = {
  gray1: "#2E3440",
  gray2: "#3D4555",
  gray3: "#4C566A",
  gray4: "#5E6779",
  gray5: "#707888",
  gray6: "#828997",
  gray7: "#949AA6",
  gray8: "#A6ABB5",
  gray9: "#B7BBC3",
  gray10: "#C9CCD2",
  gray11: "#DBDDE1",
  gray12: "#EDEEF0",
};

export const colors: ConfigType.Theme["colors"] = {
  ...blue,
  ...orange,
  ...red,
  ...green,
  ...gray,
  white: "#fff",
  black: "000000",
};
