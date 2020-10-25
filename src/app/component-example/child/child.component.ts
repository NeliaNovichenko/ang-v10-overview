import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  p: string;

  @Input()
  size: number;


  @Output()
  clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit(this.p);
  }
}
