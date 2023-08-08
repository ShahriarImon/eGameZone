import { Grid, GridItem, Text } from "@chakra-ui/layout";
import useGames from "../../../react-query/Hooks/useGames";
import { FetchGamesResponse } from "../../../react-query/services/useGameService";
import { useState } from "react";

const GameGrid = () => {
  const [userId, setUserId] = useState<number>();
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const { data: games, error } = useGames<FetchGamesResponse>({
    userId,
    pageNo,
    pageSize,
  });
  console.log("games:", games);
  console.log("errorr434:", error);

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        {games?.results?.map((ele) => (
          <GridItem key={ele?.id} w="100%" h="10">
            <Text>{ele?.name}</Text>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default GameGrid;
