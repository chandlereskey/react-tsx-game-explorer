import create from "./http-service";

export interface Game {
  id: number;
  image_url: string;
  title: string;
  descirption: string;
  genre: "Sports" | "FPS" | "BR"
  likes: number;
  visible: boolean
};



export default create('/games')