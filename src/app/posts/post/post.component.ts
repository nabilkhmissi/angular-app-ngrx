import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { deletePost, likePost } from '../state/post.actions';
import { PostState } from '../state/post.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private store: Store<PostState>, private router: Router) { }

  @Input() post!: Post;

  ngOnInit(): void {
  }

  onDelete() {
    this.store.dispatch(deletePost({ id: this.post._id! }))
  }

  onEdit() {
    this.router.navigateByUrl(`posts/edit/${this.post._id}`)
  }

}
