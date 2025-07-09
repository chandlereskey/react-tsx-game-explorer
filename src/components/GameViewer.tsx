import { Avatar, Button, Card, Skeleton, Stack } from "@chakra-ui/react";
import type { Game } from "../services/game-service";
import { LuHeart } from "react-icons/lu";

type GameViewerProp = {
  games: Game[];
  onLike: (id: number) => void;
  isLoading: boolean;
};

const GameViewer = ({ games, onLike, isLoading }: GameViewerProp) => {
  return (
    <Stack gap="4" direction="row" wrap="wrap">
      {isLoading && <Skeleton />}
      {games.map((game) => {
        if (game.visible) {
          return (
            <Card.Root width="320px" variant="subtle" key={game.id}>
              <Card.Body gap="2">
                <Avatar.Root size="lg" shape="rounded">
                  <Avatar.Image src="https://picsum.photos/200/300" />
                  <Avatar.Fallback name="Nue Camp" />
                </Avatar.Root>
                <Card.Title mb="2">{game.title}</Card.Title>
                <Card.Description>{game.descirption}</Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <div>{game.likes}</div>
                <Button
                  onClick={() => {
                    onLike(game.id);
                  }}
                >
                  <LuHeart />
                </Button>
              </Card.Footer>
            </Card.Root>
          );
        }
      })}
    </Stack>
  );
};

export default GameViewer;
