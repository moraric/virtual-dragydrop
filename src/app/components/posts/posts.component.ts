import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  public allComments: Observable<any>;

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.allComments = this.dataSvc.getAllComments();
  }

}
