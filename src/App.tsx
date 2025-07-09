import Layout from "./components/Layout";
import useGames from "./hooks/useGames";

function App() {
  const { games, isLoading, setGames } = useGames();

  return (
    <>
      <Layout games={games} isLoading={isLoading} setGames={setGames} />
    </>
  );
}

export default App;
