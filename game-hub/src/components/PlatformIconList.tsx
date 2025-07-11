import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";

type PlatformIconListProps = {
  slugs: string[];
};

function PlatformIconList({ slugs }: PlatformIconListProps) {
  return (
    <HStack color="grey" marginY={1}>
      {slugs.findIndex((slug) => slug === "pc") !== -1 && <FaWindows />}
      {slugs.findIndex((slug) => slug === "playstation") !== -1 && (
        <FaPlaystation />
      )}
      {slugs.findIndex((slug) => slug === "xbox") !== -1 && <FaXbox />}
      {slugs.findIndex((slug) => slug === "nintendo") !== -1 && <SiNintendo />}
      {slugs.findIndex((slug) => slug === "mac") !== -1 && <FaApple />}
      {slugs.findIndex((slug) => slug === "linux") !== -1 && <FaLinux />}
      {slugs.findIndex((slug) => slug === "andriod") !== -1 && <FaAndroid />}
      {slugs.findIndex((slug) => slug === "ios") !== -1 && <MdPhoneIphone />}
      {slugs.findIndex((slug) => slug === "web") !== -1 && <BsGlobe />}
    </HStack>
  );
}

export default PlatformIconList;
