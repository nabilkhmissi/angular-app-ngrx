import { createReducer, on } from "@ngrx/store";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, showPostLoading, updatePostSuccess } from "./post.actions";
import { initialPostState } from "./post.state";

export function postReducer(state: any, action: any) {
    return _postReducer(state, action);
}


const _postReducer = createReducer(
    initialPostState,
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts
        }
    }),
    on(addPostSuccess, (state, action) => {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }),
    on(deletePostSuccess, (state, action) => {
        let posts = state.posts.filter(p => p._id !== action.id)
        return {
            ...state,
            posts: posts
        }
    }),
    on(updatePostSuccess, (state, action) => {
        let posts = state.posts.filter(p => p._id !== action.post._id)
        return {
            ...state,
            posts: [...posts, action.post]
        }
    })

)