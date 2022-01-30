import Box from "@components/particles/Box";
import React from "react";

interface IconProps {
  Icon: string;
}
const IconCircle: React.FC<IconProps> = (IconProps) => {
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        height: 40,
        width: 40,
        backgroundColor: "#EBF3FE",
        fontSize: 30,
        justifyContent: "center",
        borderRadius: 90,
      }}
    >
      {IconProps.Icon}
    </Box>
  );
};

export default IconCircle;
