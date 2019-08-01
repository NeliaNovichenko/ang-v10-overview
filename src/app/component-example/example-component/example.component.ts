// tslint:disable-next-line:max-line-length
import { Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements
  OnChanges,
  // DoCheck,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ViewChild('nonStaticDiv', { static: false })
  nonStaticDiv: ElementRef;

  @ViewChild('staticDiv', { static: true })
  staticDiv: ElementRef;

  constructor() { }


  public countClick = 0;

  handleClick() {
    console.log('handleClick');
    this.countClick += 1;
    this.staticDiv.nativeElement.innerText = `You clicked ${this.countClick} times`;
  }

  ngOnInit(): void {
    /*  */
    console.log('Called ngOnInit');
    console.log('static div', this.staticDiv);
    console.log('not static div', this.nonStaticDiv);
  }
  ngAfterViewInit(): void {
    /*  */
    console.log('Called ngAfterViewInit');
    console.log('static div', this.staticDiv);
    console.log('not static div', this.nonStaticDiv);
  }
  ngAfterViewChecked(): void {
    /*  */
    console.log('Called ngAfterViewChecked');
  }

  ngOnChanges(): void {
    console.log('Called ngOnChanges');
  }

  ngAfterContentInit(): void {
    /*  */
    console.log('Called ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
     /*  */
    console.log('Called ngAfterContentChecked');
  }
  ngOnDestroy(): void {
    /*  */
    console.log('Called ngOnDestroy');
  }
}
