import { Card, CardBody, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Game } from "../../../../react-query/Hooks/useGames";
import PlatFormIcons from "./Compo/PlatFormIcons";
import Critics from "./Compo/Critics";
import useImgUrlCrop from "../../../../react-query/services/ImageUrlCrop";
interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Stack>
        <Image src={useImgUrlCrop(game?.background_image)} />
        <CardBody>
          <Stack>
            <Text fontSize={"2xl"}>{game?.name}</Text>
            <HStack justifyContent="space-between">
              <PlatFormIcons pPlatform={game?.parent_platforms} />
              <Critics critic={game?.metacritic} />
            </HStack>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default GameCard;
