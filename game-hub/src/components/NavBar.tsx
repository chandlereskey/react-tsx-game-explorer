import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
