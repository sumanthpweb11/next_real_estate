import { Box, Fade, Text } from "@chakra-ui/react";
import React from "react";
import HeroForm from "../HeroForm";

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position={"relative"}
        minHeight={{ base: "110vh", sm: "60vh" }}
        backgroundImage={`url("./hero/herobg.jpg")`}
        backgroundPosition="center"
        backgroundSize={"cover"}
        backgroundAttachment="fixed"
        // opacity={0.3}
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.85"
          backgroundColor={"blue.900"}
        />
        <Box
          display={"flex"}
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          justifyContent={{ base: "flex-start", sm: "space-between" }}
          maxWidth="1280px"
          // position="absolute"
          color="white"
          fontWeight={"light"}
          margin={"0 auto"}
          padding="2rem"
          // left={0}
          // right={0}
          // top={0}
          // bottom={0}
          // backgroundColor={"red"}
        >
          <Box zIndex={999} width={{ base: "100%", sm: "50%" }}>
            <Text
              fontSize={{ base: "4xl", sm: "5xl" }}
              lineHeight="shorter"
              marginBottom={"1.5rem"}
            >
              Download our new <strong>Property Buying Guide</strong>
            </Text>
            <Text fontStyle={{ base: "lg", sm: "2xl" }}>
              A Free Pdf to check evaluations and much more...
            </Text>
          </Box>
          <Box
            zIndex={999}
            width={{ base: "100%", sm: "auto" }}
            marginTop={{ base: "2rem", sm: "0" }}
            // backgroundColor={"yellow.900"}
          >
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
