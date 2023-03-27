import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoading } from 'src/app/shared/state/shared.actions';
import { loadPosts } from '../state/post.actions';
import { getPosts } from '../state/post.selector';
import { PostState } from '../state/post.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private store: Store<PostState>) { }

  posts$ = this.store.select(getPosts);
  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.store.dispatch(setLoading({ value: true }));
  }

}
