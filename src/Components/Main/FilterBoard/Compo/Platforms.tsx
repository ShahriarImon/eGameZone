import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlatform from "../../../../react-query/Hooks/usePlatform";
import useGameQuery from "../../../../store/useGameQuery";

const Platforms = () => {
  const { data: platformList } = usePlatform();
  const setPlatforms = useGameQuery((s) => s.setPlatforms);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Platform
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
