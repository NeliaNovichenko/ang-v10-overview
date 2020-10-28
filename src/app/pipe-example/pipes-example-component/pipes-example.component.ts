import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PipesExampleComponent implements OnInit {
  birthday = new Date(1998, 3, 15); // April 15, 1988

  constructor() { }

  ngOnInit() {
  }

  toUpper(string) {
    return string.toUpperCase();
  }

}
