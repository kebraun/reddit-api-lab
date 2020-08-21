import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(private service: RedditService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((response) => {
      this.posts = response.data.children;
    });
  }
}
