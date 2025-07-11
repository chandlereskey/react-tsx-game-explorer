import { Badge } from "@chakra-ui/react";

type CriticScoreProps = {
  score: number;
};

function CriticScore({ score }: CriticScoreProps) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      backgroundColor={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
