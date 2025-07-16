import { Card, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

type GameCardProp = {
  game: Game;
};

function GameCard({ game }: GameCardProp) {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <PlatformIconList
            slugs={game.parent_platforms.map(
              (platform) => platform.platform.slug
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Header fontSize="2xl">{game.name}</Card.Header>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
