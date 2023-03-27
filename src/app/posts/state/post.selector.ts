import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";


export const POSTS_STATE_NAME = 'posts'


const getPostState = createFeatureSelector<PostState>(POSTS_STATE_NAME);


export const getPosts = createSelector(getPostState, state => {
    return state.posts
})

export const getPostById = createSelector(getPostState, (state: PostState, props: { id: string }) => {
    let post = state.posts.find(p => p._id == props.id)
    return post ? post : null;
})