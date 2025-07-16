import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

type GameHeadingProps = {
  gameQuery: GameQuery;
};

function GameHeading({ gameQuery }: GameHeadingProps) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl" textAlign="left">
      {heading}
    </Heading>
  );
}

export default GameHeading;
