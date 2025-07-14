import { HStack, List, Image, Text, DataList, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
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
            <Text fontSize="Large">{genre.name}</Text>
          </HStack>
        </DataList.Item>
      ))}
    </DataList.Root>
  );
}

export default GenreList;
