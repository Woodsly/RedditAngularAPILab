import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  redditPost:Post = {} as Post;
  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.redditService.getRedditPosts().subscribe((response:Post) => {
      this.redditPost = response;
    });
  }

}
