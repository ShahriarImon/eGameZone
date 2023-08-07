import { HStack } from "@chakra-ui/layout";
import { FormControl, FormLabel, Image, Switch } from "@chakra-ui/react";
import logo from "../assets/gameZone.png";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      paddingX={5}
      paddingY={2}
    >
      <Image src={logo} h={"50px"} />
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent={"right"}
        gap={1}
      >
        <Switch id="email-alerts" colorScheme={"green"} />{" "}
        <FormLabel htmlFor="email-alerts" mb="0">
          Dark mode
        </FormLabel>
      </FormControl>
    </HStack>
  );
};

export default Navbar;
