import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { DataService } from '../posts/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public posts: any = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getPostsByUser()
          .subscribe(res => this.posts = res
            );
  }

  onDropped(event: CdkDragDrop<any>){
    console.log(event);
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.posts, anterior, actual);
  }

}
