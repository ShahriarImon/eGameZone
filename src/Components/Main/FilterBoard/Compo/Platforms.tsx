import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlatform from "../../../../react-query/Hooks/usePlatform";
import useGameQuery from "../../../../store/useGameQuery";

const Platforms = () => {
  const { data: platformList } = usePlatform();
  const [platforms, setPlatforms] = useGameQuery((s) => [
    s.gameQuery.platforms,
    s.setPlatforms,
  ]);
  const selectedPlatforms = platformList?.results?.find(
    (ele) => ele?.id === platforms
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatforms?.name ? selectedPlatforms?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platformList?.results?.map((ele) => (
          <MenuItem
            onClick={() => {
              setPlatforms(ele?.id);
            }}
          >
            {ele?.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Platforms;
