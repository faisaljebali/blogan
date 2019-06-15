import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  allpost : any;
  constructor(private postservice: PostService) { }

  ngOnInit() {
     return this.postservice.getposts().subscribe((res:any) => {
        this.allpost = res;
    });
  }

}
