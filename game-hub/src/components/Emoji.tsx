import bullsEye from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { ImageProps, Image } from "@chakra-ui/react";

type EmojiProps = {
  rating: number;
};

function Emoji({ rating }: EmojiProps) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} />;
}

export default Emoji;
