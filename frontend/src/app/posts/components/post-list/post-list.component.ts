import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  @Output() add = new EventEmitter(false);

 displayedColumns = ['_id', 'title', 'body', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

}
