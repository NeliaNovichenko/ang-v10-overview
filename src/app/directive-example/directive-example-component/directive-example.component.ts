import { Component, OnInit, ViewChildren } from '@angular/core';
import { TestDirective } from '../test.directive';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {

  @ViewChildren(TestDirective)
  children: TestDirective[];

  constructor() { }

  ngOnInit() {
  }

  changeColor(color: string) {
    this.children.forEach(child => child.highlightColor = color);
  }
}
