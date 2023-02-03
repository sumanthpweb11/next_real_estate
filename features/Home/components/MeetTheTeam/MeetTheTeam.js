import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { agents } from "./agentConts";
import AgentCard from "./components/AgentCard";

const MeetTheTeam = () => {
  return (
    <Box
      maxWidth={"1280px"}
      margin="0 auto"
      paddingY={{ base: "3rem", sm: "6rem" }}
    >
      <Text
        fontSize={{ base: "4xl", sm: "5xl" }}
        lineHeight="shorter"
        fontWeight={"light"}
        paddingX="2rem"
        textAlign={"center"}
      >
        Meet The Team
      </Text>
      <Text
        fontSize={"2xl"}
        fontWeight="light"
        marginTop={"1rem"}
        marginBottom="3rem"
        paddingX={"2rem"}
        textAlign="center"
      >
        Best in the Industry at your Service
      </Text>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="space-around"
        gap={"1.5rem"}
      >
        {agents.map((agent) => {
          return <AgentCard key={agent.name} {...agent} />;
        })}
      </Flex>
    </Box>
  );
};

export default MeetTheTeam;
