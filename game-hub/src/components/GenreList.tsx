import {
  HStack,
  List,
  Image,
  Text,
  DataList,
  Spinner,
  Button,
  Heading,
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
    <>
      <Heading fontSize="2xl" marginBottom={3} textAlign="left">
        Genres
      </Heading>
      <DataList.Root>
        {data.map((genre) => (
          <DataList.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="subtle"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </DataList.Item>
        ))}
      </DataList.Root>
    </>
  );
}

export default GenreList;
