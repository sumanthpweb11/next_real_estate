import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { navigationsLinks } from "../../navigationConts";

const NavigationMobile = () => {
  return (
    <Box
      color="blue.600"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "block", md: "none" }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        {/* LOGO LINK MOBILE */}
        <Link href="/">
          <Box display={"flex"} alignItems="center" gap={"2"}>
            <AiFillHome />
            <Text fontFamily={"2xl"} fontWeight="black">
              Homes
            </Text>
          </Box>
        </Link>

        {/* NAV LINKS MOBILE */}

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {navigationsLinks.map((item) => {
              return <NavigationLink key={item.title} {...item} />;
            })}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems={"center"} gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
