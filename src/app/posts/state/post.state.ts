import { Post } from "src/app/models/post.model"

export const initialPostState: PostState = {
    posts: []
}


export interface PostState {
    posts: Post[]
}
