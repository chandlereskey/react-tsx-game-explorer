import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      />
    </InputGroup>
  );
}

export default SearchInput;
