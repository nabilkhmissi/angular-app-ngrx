import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/models/post.model"


const LOAD_POSTS = "[post state] load posts"
const LOAD_POSTS_SUCCSESS = "[post state] load post success"
const SHOW_POST_LOADING = "[post state] show posts loading"
const LIKE_POST = "[post state] like post";
const ADD_POST = "[post state] add post"
const ADD_POST_SUCCESS = "[post state] add post success"
const DELETE_POST = "[post state] delete post"
const DELETE_POST_SUCCESS = "[post state] delete post success"
const UPDATE_POST = "[post state] update post"
const UPDATE_POST_SUCCESS = "[post state] update post success"



export const loadPosts = createAction(LOAD_POSTS)
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCSESS, props<{ posts: Post[] }>())
export const showPostLoading = createAction(SHOW_POST_LOADING, props<{ value: boolean }>())
export const likePost = createAction(LIKE_POST, props<{ reaction: string, post: Post }>())
export const addPost = createAction(ADD_POST, props<{ post: any }>())
export const addPostSuccess = createAction(ADD_POST_SUCCESS, props<{ post: Post }>())
export const deletePost = createAction(DELETE_POST, props<{ id: string }>())
export const deletePostSuccess = createAction(DELETE_POST_SUCCESS, props<{ id: string }>())
export const updatePostSuccess = createAction(UPDATE_POST_SUCCESS, props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST, props<{ post: any }>());

