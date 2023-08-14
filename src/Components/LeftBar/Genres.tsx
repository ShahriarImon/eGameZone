import useGenres from "../../react-query/Hooks/useGenres";
import { Stack } from "@chakra-ui/layout";
import GenreCard from "./Compo/GenreCard/GenreCard";
import { useState } from "react";

const Genres = () => {
  const [userId, setUserId] = useState<number>(0);
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const { data: genres } = useGenres({
    userId,
    pageNo,
    pageSize,
  });
  console.log("genres455:", genres);
  return (
    <Stack padding={"20px"} gap={3}>
      {genres?.results?.map((ele) => (
        <GenreCard genre={ele} key={ele?.id} />
      ))}
    </Stack>
  );
};

export default Genres;
