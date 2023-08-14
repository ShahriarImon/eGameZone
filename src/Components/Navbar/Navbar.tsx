import { HStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import logo from "../../assets/gameZone.png";
import ColorModeToggle from "./ColorModeToggle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      paddingX={5}
      paddingY={2}
    >
      <Image src={logo} h={"50px"} onClick={() => navigate("/")} />
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;
