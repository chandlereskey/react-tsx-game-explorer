import { Grid, GridItem, Switch } from "@chakra-ui/react";
import SideNavBar from "./SideNavBar";
import GameViewer from "./GameViewer";
import type { Game } from "@/services/game-service";
import SearchBar from "./SearchBar";
import { useColorMode } from "./ui/color-mode";

type LayoutProp = {
  games: Game[];
  setGames: (games: Game[]) => void;
  isLoading: boolean;
};

const Layout = ({ games, isLoading, setGames }: LayoutProp) => {
  const { toggleColorMode } = useColorMode();

  const onGenreFilter = (genre: string) => {
    setGames(
      games.map((game) => {
        return { ...game, visible: game.genre === genre || genre === "" };
      })
    );
  };

  const onSearch = (searchText: string) => {
    setGames(
      games.map((game) => {
        return { ...game, visible: game.title.includes(searchText) };
      })
    );
  };

  const onLike = (id: number) => {
    console.log("onlike");
    setGames(
      games.map((game) =>
        game.id === id ? { ...game, likes: game.likes + 1 } : game
      )
    );
  };
  return (
    <Grid
      h="100%"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={20}
      overflow="0"
    >
      <GridItem rowSpan={5} colSpan={1}>
        <SideNavBar onGenreFilter={onGenreFilter} />
      </GridItem>
      <GridItem colStart={2} colEnd={4} rowStart={1}>
        <SearchBar onSearch={onSearch} />
      </GridItem>
      <GridItem colStart={5} rowStart={1}>
        <Switch.Root onChange={() => toggleColorMode()}>
          <Switch.HiddenInput />
          <Switch.Control />
          <Switch.Label>Dark Mode</Switch.Label>
        </Switch.Root>
      </GridItem>
      <GridItem rowSpan={2} colSpan={4}>
        <GameViewer games={games} onLike={onLike} isLoading={isLoading} />
      </GridItem>
    </Grid>
  );
};

export default Layout;
