import { HStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import logo from "../../assets/Gaming.png";
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
      <Image
        src={logo}
        // marginLeft={"20px"}
        h={"60px"}
        onClick={() => navigate("/")}
      />
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;
