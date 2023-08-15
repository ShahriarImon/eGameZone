import { HStack } from "@chakra-ui/layout";
import Platforms from "./Compo/Platforms";
import SortOrder from "./Compo/SortOrder";

const FilterBoard = () => {
  return (
    <HStack paddingX={"10px"} gap={2} justifyContent={"space-between"}>
      <Platforms />
      <SortOrder />
    </HStack>
  );
};

export default FilterBoard;
