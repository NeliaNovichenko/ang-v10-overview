import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[highlightTest]'
})
export class TestDirective implements OnInit {
  @Input() highlightColor = 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log('Hi from highlightTest, element: ', this.el);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
