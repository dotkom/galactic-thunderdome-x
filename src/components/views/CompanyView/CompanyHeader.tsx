/** @jsxImportSource theme-ui */
import { Box, Flex } from "@theme-ui/components";
import { ThemeUIStyleObject } from "@theme-ui/css";
import { FC } from "react";
import { SectionProps } from ".";
import PortableText from "../../molecules/PortableText";

export const CompanyHeader: FC<SectionProps> = ({ content }) => {
  return (
    <Flex sx={styles.flex}>
      <Box sx={styles.box}>
        <PortableText blocks={content} sx={styles.portableText} />
      </Box>
    </Flex>
  );
};

interface StyleProps {
  flex: ThemeUIStyleObject | undefined;
  box: ThemeUIStyleObject | undefined;
  portableText: ThemeUIStyleObject | undefined;
}

const styles: StyleProps = {
  flex: {
    bg: "orange.12",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  },
  box: { maxWidth: "1024px", margin: "auto", marginBottom: "20px", marginTop: 5 },
  portableText: {
    maxWidth: "768px",
    width: "100%",
    margin: "auto",
    padding: 4,
    h1: { color: "gray.1", marginBottom: 4, fontSize: 36 },
    normal: { fontSize: 14 },
  },
};
