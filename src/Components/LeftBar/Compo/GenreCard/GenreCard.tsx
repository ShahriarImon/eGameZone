import { HStack, Text } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import { Genre } from "../../../../react-query/Hooks/useGenres";
import useImgUrlCrop from "../../../../react-query/services/ImageUrlCrop";
import useGameQuery from "../../../../store/useGameQuery";
interface props {
  genre: Genre;
}
const GenreCard = ({ genre }: props) => {
  const [setGenres, genres] = useGameQuery((s) => [
    s.setGenres,
    s.gameQuery.genres,
  ]);
  return (
    <HStack gap={4} cursor={"pointer"} onClick={() => setGenres(genre?.id)}>
      <Image
        src={useImgUrlCrop(genre?.image_background)}
        boxSize={"43px"}
        objectFit={"cover"}
        borderRadius={"12px"}
      />
      <Button
        variant={"link"}
        fontWeight={genres === genre?.id ? "bold" : "normal"}
        fontSize={"13pt"}
        onClick={() => {
          setGenres(genre?.id);
        }}
      >
        {genre?.name}
      </Button>
    </HStack>
  );
};

export default GenreCard;
