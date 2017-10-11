import { NotFoundError } from './../Common/not-found';
import { AppError } from './../Common/appError';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{
  posts: any[];

  constructor(private service: PostsService){
  }

  ngOnInit(){
      this.service.get()
      .subscribe(posts => this.posts = posts);
  }
  createPost(input: HTMLInputElement)
  {
    const post = {title: input.value};
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
    .subscribe(newPost => {
      post['id'] = newPost.id; },
    (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof NotFoundError)
        alert('Post not found!');
      else throw error;
    });
  }


  remove(post: HTMLInputElement)
  {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.remove(post.id)
    .subscribe(null,
    (error: AppError) => {
      this.posts.splice(index, 0, post);

        if (error  instanceof NotFoundError)
          alert('Post is already deleted');
        else throw error;
      });
    }
    updatePost(post: HTMLInputElement)
    {
      this.service.update(post)
      .subscribe(response => {
        console.log(response.json());
      },
      (error: AppError) => {
        if (error  instanceof NotFoundError)
          alert('Post is already deleted');
        else throw error;
      });
    }

}
