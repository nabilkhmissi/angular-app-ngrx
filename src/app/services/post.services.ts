import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient) { }

    readonly baseUrl = "http://localhost:3000/api/posts";


    loadPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.baseUrl);
    }

    doLikePost(id: string, reaction: { reaction: string }) {
        return this.http.post(`this.baseUrl/like/${id}`, reaction);
    }
    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(`${this.baseUrl}`, post);
    }
    updatePost(post: Post): Observable<Post> {
        console.log(post)
        return this.http.put<Post>(`${this.baseUrl}/${post._id}`, post);
    }

    deletePost(id: string) {
        return this.http.delete<Post>(`${this.baseUrl}/${id}`);
    }

}