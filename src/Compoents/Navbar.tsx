import { HStack } from "@chakra-ui/layout";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      padding={5}
    >
      <div>Navbar</div>
      <FormControl display="flex" alignItems="center" justifyContent={"right"}>
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable email alerts?
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
    </HStack>
  );
};

export default Navbar;
