import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PropertySlider from "./components/PropertySlider";

const FeaturedProperties = ({ featuredProperties }) => {
  return (
    <Box backgroundColor={"blue.50"}>
      <Box
        maxWidth={"1280px"}
        margin="0 auto"
        color={"gray.600"}
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight="shorter"
          fontWeight={"light"}
          paddingX="2rem"
          textAlign={"center"}
        >
          Discover our Featured Properties
        </Text>
        <Text
          fontSize={"2xl"}
          marginTop="1rem"
          marginBottom={"3rem"}
          textAlign={"center"}
          paddingX="2rem"
          lineHeight="shorter"
        >
          A Selection of our Best Properties
        </Text>
        <PropertySlider featuredProperties={featuredProperties} />
      </Box>
    </Box>
  );
};

export default FeaturedProperties;
