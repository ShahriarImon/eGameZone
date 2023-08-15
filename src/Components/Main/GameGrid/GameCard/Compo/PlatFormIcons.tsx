import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { platform } from "../../../../../react-query/Hooks/useGames";

interface props {
  pPlatform: { platform: platform }[];
}
const PlatFormIcons = ({ pPlatform }: props) => {
  console.log("platform:", pPlatform);
  const iconList: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    linux: FaLinux,
    apple: FaApple,
    android: FaAndroid,
    mac: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };
  return (
    <HStack>
      {pPlatform?.map(({ platform }) => (
        <Icon
          as={iconList[platform?.slug]}
          color="gray.500"
          key={platform?.id}
        />
      ))}
    </HStack>
  );
};

export default PlatFormIcons;
