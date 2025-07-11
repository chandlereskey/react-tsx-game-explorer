import { Card, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

type GameCardProp = {
  game: Game;
};

function GameCard({ game }: GameCardProp) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Header fontSize="2xl">{game.name}</Card.Header>
        <PlatformIconList
          slugs={game.parent_platforms.map(
            (platform) => platform.platform.slug
          )}
        />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
