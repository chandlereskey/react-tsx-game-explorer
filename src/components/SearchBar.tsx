import { Button, Stack, Input } from "@chakra-ui/react";
import { useState } from "react";

type SearchBarProp = {
  onSearch: (searchText: string) => void;
};

function SearchBar({ onSearch }: SearchBarProp) {
  const [searchText, setSearchText] = useState("");

  return (
    <Stack direction="row">
      <Input
        placeholder="Search Games"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button onClick={() => onSearch(searchText)}>Search</Button>
    </Stack>
  );
}

export default SearchBar;
