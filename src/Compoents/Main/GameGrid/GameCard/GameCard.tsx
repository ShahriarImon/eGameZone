import { Card, Image, Text, VStack } from "@chakra-ui/react";
import { Game } from "../../../../react-query/Hooks/useGames";
interface gameProps {
  game: Game;
}
const GameCard = ({ game }: gameProps) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <VStack gap={5}>
        <Image src={game?.background_image} />
        <Text fontSize={"2xl"}>{game?.name}</Text>
      </VStack>
    </Card>
  );
};

export default GameCard;
