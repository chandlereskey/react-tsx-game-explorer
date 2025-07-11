import { Card, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import React from "react";

type GameCardProp = {
  game: Game;
};

function GameCard({ game }: GameCardProp) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Header fontSize="2xl">{game.name}</Card.Header>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
