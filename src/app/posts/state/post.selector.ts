import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "src/app/models/post.model";
import { RouterStateUrl } from "src/app/router/custom-serializer";
import { getCurrentRoute } from "src/app/router/router.selector";
import { PostState } from "./post.state";


export const POSTS_STATE_NAME = 'posts'


const getPostState = createFeatureSelector<PostState>(POSTS_STATE_NAME);


export const getPosts = createSelector(getPostState, state => {
    return state.posts
})

export const getPostById = createSelector(getPosts, getCurrentRoute, (posts: Post[], router: RouterStateUrl) => {
    return posts ? posts.find(p => p._id === router.params['id']) : null
})