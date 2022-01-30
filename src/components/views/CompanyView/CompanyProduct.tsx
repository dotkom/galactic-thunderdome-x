/** @jsxImportSource theme-ui */

import { Flex } from "@theme-ui/components";
import { ThemeUIStyleObject } from "@theme-ui/css/dist/declarations/src";
import { FC } from "react";
import { SectionProps } from ".";
import PortableText from "../../molecules/PortableText";

export const CompanyProducts: FC<SectionProps> = ({ content }) => {
  return (
    <Flex sx={styles.container}>
      <PortableText blocks={content} sx={styles.portableText}></PortableText>
    </Flex>
  );
};
interface StyleSX {
  container: ThemeUIStyleObject;
  portableText: ThemeUIStyleObject;
}

const styles: StyleSX = {
  container: {
    maxWidth: "500px",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    margin: "auto",
    padding: 40,
  },
  portableText: {
    h2: {
      color: "gray.1",
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 4,
      marginTop: 4,
      textAlign: "center",
    },
    p: { fontSize: 14 },
  },
};
