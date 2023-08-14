import { HStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Genre } from "../../../../react-query/Hooks/useGenres";
import useImgUrlCrop from "../../../../react-query/services/ImageUrlCrop";
interface props {
  genre: Genre;
}
const GenreCard = ({ genre }: props) => {
  return (
    <HStack gap={4} cursor={"pointer"}>
      <Image
        src={useImgUrlCrop(genre?.image_background)}
        boxSize={"35px"}
        objectFit={"cover"}
        borderRadius={"12px"}
      />
      <Text fontWeight={400} fontSize={"13pt"}>
        {genre?.name}
      </Text>
    </HStack>
  );
};

export default GenreCard;
