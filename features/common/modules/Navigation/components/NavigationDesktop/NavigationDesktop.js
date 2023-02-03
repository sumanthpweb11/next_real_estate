import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { navigationsLinks } from "../../navigationConts";

const NavigationDesktop = () => {
  return (
    <Box
      color="blue.600"
      paddingY="2rem"
      backgroundColor="white"
      display={{ base: "none", md: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          {/* LOGO LINK */}
          <Link href="/">
            <Box display={"flex"} alignItems="center" gap={"2"}>
              <AiFillHome />
              <Text fontFamily={"2xl"} fontWeight="black">
                Homes
              </Text>
            </Box>
          </Link>

          {/* NAV LINKS */}
          <Flex gap={"12"} alignItems="center" fontFamily={"medium"}>
            {navigationsLinks.map((item) => {
              return <NavigationLink key={item.title} {...item} />;
            })}
            <Button
              padding={"1.5rem"}
              colorScheme="twitter"
              fontSize={"0.8rem"}
              fontWeight="medium"
            >
              CREATE LISTING
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems={"center"} gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
