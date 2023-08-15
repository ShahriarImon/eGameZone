import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useGameQuery from "../../../../store/useGameQuery";

const sortOrders = [
  { name: "Relevance", value: "" },
  { name: "Date Added", value: "-added" },
  { name: "name", value: "name" },
  { name: "Released date", value: "-released" },
  { name: "Popularity", value: "-metacritic" },
  { name: "Average rating", value: "-rating" },
];
const SortOrder = () => {
  const [ordering, setOrdering] = useGameQuery((s) => [
    s.gameQuery.ordering,
    s.setOrdering,
  ]);
  const selectedOrder = sortOrders?.find((ele) => ele?.value === ordering);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by : {selectedOrder?.name}
      </MenuButton>
      <MenuList>
        {sortOrders?.map((ele) => (
          <MenuItem
            onClick={() => {
              setOrdering(ele?.value);
            }}
          >
            {ele?.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrder;
