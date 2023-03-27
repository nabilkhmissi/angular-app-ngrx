import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostComponent } from "./post/post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostEffects } from "./state/post.effects";
import { postReducer } from "./state/post.reducer";
import { POSTS_STATE_NAME } from "./state/post.selector";


@NgModule({
    declarations: [
        PostComponent,
        PostsListComponent,
        AddPostComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: PostsListComponent },
            { path: 'add', component: AddPostComponent },
            { path: 'edit/:id', component: AddPostComponent }
        ]),
        StoreModule.forFeature(POSTS_STATE_NAME, postReducer),
        EffectsModule.forFeature([PostEffects])

    ]
})
export class PostModule { }