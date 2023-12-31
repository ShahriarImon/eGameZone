import { Text, useColorMode } from "@chakra-ui/react";
import { HStack, Switch } from "@chakra-ui/react";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <HStack
        display="flex"
        alignItems="center"
        justifyContent={"right"}
        gap={1}
      >
        <Switch
          id="email-alerts"
          colorScheme={"green"}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />{" "}
        <Text>Dark mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeToggle;
