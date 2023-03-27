import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, delay, map, mergeMap, of, tap } from "rxjs";
import { PostsService } from "src/app/services/post.services";
import { setErrorMessage, setLoading } from "src/app/shared/state/shared.actions";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess, showPostLoading, updatePost, updatePostSuccess } from "./post.actions";
import { PostState } from "./post.state";

@Injectable()
export class PostEffects {
    constructor(
        private action$: Actions,
        private postsService: PostsService,
        private store: Store<PostState>,
        private router: Router
    ) { }



    loadPosts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loadPosts),
            mergeMap(() => {
                return this.postsService.loadPosts().pipe(
                    map(posts => {
                        this.store.dispatch(setLoading({ value: false }))
                        return loadPostsSuccess({ posts: posts })
                    }),
                    catchError(errorMessage => {
                        return of(setErrorMessage({ message: errorMessage.error.error }))
                    })
                )
            })
        )
    })


    addPost$ = createEffect(() => {
        return this.action$.pipe(
            ofType(addPost),
            mergeMap(action => {
                return this.postsService.addPost(action.post).pipe(
                    map((post) => {
                        return addPostSuccess({ post })
                    })
                )
            })
        )
    })

    updatePost$ = createEffect(() => {
        return this.action$.pipe(
            ofType(updatePost),
            mergeMap(action => {
                return this.postsService.updatePost(action.post).pipe(
                    map((post) => {
                        return updatePostSuccess({ post })
                    })
                )
            })
        )
    })


    deletePost$ = createEffect(() => {
        return this.action$.pipe(
            ofType(deletePost),
            mergeMap(action => {
                return this.postsService.deletePost(action.id).pipe(
                    map(() => {
                        return deletePostSuccess({ id: action.id })
                    })

                )
            })
        )
    })


    redirect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(...[addPostSuccess, updatePostSuccess]),
            tap(action => {
                this.router.navigate(['/posts'])
            })
        )
    }, { dispatch: false })








}