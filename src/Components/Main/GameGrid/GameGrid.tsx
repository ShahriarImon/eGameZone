import { SimpleGrid } from "@chakra-ui/layout";
import useGames from "../../../react-query/Hooks/useGames";
// import { useState } from "react";
import GameCard from "./GameCard/GameCard";

const GameGrid = () => {
  // const [userId, setUserId] = useState<number>();
  // const [pageNo, setPageNo] = useState<number>(1);
  // const [pageSize, setPageSize] = useState<number>(5);
  // {
  //   userId,
  //   pageNo,
  //   pageSize,
  // }
  const { data: games } = useGames({
    pageNo: 1,
    userId: 2,
    pageSize: 3,
  });
  console.log("games:", games);

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={5}
        padding={"10px"}
      >
        {games?.results?.map((ele) => (
          <GameCard game={ele} key={ele?.id} />
        ))}
      </SimpleGrid>{" "}
    </div>
  );
};

export default GameGrid;
