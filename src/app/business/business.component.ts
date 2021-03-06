import { Component, OnInit } from '@angular/core';
import {AllBlogsService} from "../all-blogs.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private blogs: AllBlogsService) { }
  blogs1: Object[];

  ngOnInit() {
    this.blogs.getBlogs().subscribe((data) => {
      this.blogs1 = data;
    });
  }

}
