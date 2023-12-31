import useGenres from "../../react-query/Hooks/useGenres";
import { Stack } from "@chakra-ui/layout";
import GenreCard from "./Compo/GenreCard/GenreCard";

const Genres = () => {
  const { data: genres } = useGenres();
  return (
    <Stack paddingX={"20px"} gap={3.5}>
      {genres?.results?.map((ele) => (
        <GenreCard genre={ele} key={ele?.id} />
      ))}
    </Stack>
  );
};

export default Genres;
