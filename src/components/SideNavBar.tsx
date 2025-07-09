"use client";

import { Button, Stack, Card } from "@chakra-ui/react";

type SideNavBarProp = {
  onGenreFilter: (genre: string) => void;
};

const SideNavBar = ({ onGenreFilter }: SideNavBarProp) => {
  return (
    <>
      <Card.Root width="100%" height="100%" variant="subtle">
        <Card.Body gap="2">
          <Button onClick={() => onGenreFilter("")}>Game Genres</Button>
          <Stack>
            <div onClick={() => onGenreFilter("Sports")}>Sports</div>
            <div onClick={() => onGenreFilter("FPS")}>FPS</div>
            <div onClick={() => onGenreFilter("BR")}>BR</div>
          </Stack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default SideNavBar;
