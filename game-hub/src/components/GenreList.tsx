import {
  HStack,
  List,
  Image,
  Text,
  DataList,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: GenreListProps) {
  const { data, isLoading, error } = useGenres();
  if (error) return;
  if (isLoading) return <Spinner />;
  return (
    <DataList.Root>
      {data.map((genre) => (
        <DataList.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="subtle"
            >
              {genre.name}
            </Button>
          </HStack>
        </DataList.Item>
      ))}
    </DataList.Root>
  );
}

export default GenreList;
