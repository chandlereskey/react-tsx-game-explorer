import apiClient from "./api-client";
import type {Game} from "./game-service";

type Entity = {
    id: number
}

class HttpService {

    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    getAll() {
        const controller = new AbortController();
        // const request = apiClient
        //     .get<T[]>(this.endpoint, {
        //     signal: controller.signal,
        // })
        // faking request with returning list of games
        const game_samples: Game[] = [{
                id: 1,
                image_url: "some url here",
                title: "2K",
                descirption: "This is a basketball playing video game",
                genre: "Sports",
                likes: 0,
                visible: true
                }, 
            {
                id: 2,
                image_url: "some url here",
                title: "COD",
                descirption: "This is a realistic FPS",
                genre: "FPS",
                likes: 0,
                visible: true
                },
            {
                id: 3,
                image_url: "some url here",
                title: "Fortnite",
                descirption: "This is a unrealistic Battle Royale",
                genre: "BR",
                likes: 0,
                visible: true
                }]

        return {game_samples, cancel: () => controller.abort()}
    }

    // create<T>(entity: T) {
    //     const request = apiClient.post(this.endpoint, entity)
    //     return request
    // }

    // delete(id: number) {
    //     const request = apiClient.delete(this.endpoint + '/' + id)
    //     return request
    // }

    // patch<T extends Entity>(entity: T) {
    //     const request = apiClient.patch(this.endpoint + '/' + entity.id, entity)
    //     return request
    // }
}


export default function create(endpoint: string) {return new HttpService(endpoint)}