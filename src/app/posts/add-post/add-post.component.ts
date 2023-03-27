import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { addPost, updatePost } from '../state/post.actions';
import { getPostById } from '../state/post.selector';
import { PostState } from '../state/post.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private store: Store<PostState>) { }

  title = new FormControl()
  description = new FormControl()
  formGroup!: FormGroup;
  btn_text = "add";
  id!: string;
  post!: Post;
  subscription!: Subscription

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: this.title,
      description: this.description,
    })

    this.store.select(getPostById).subscribe(
      post => {
        if (post) {
          this.btn_text = "Edit"
          this.post = post!
          this.formGroup.patchValue({
            title: post!.title,
            description: post!.description,
          });
        }

      }
    )
  }

  onSubmit() {
    let post = this.formGroup.value;
    if (this.btn_text == "add") {
      console.log({ post })
      this.store.dispatch(addPost({ post: post }))
    } else {
      post._id = this.post._id
      post.date = this.post.date
      this.store.dispatch(updatePost({ post }))
    }
  }
}
