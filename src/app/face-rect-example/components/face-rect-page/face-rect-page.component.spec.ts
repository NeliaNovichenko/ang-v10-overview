import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceRectPageComponent } from './face-rect-page.component';

describe('FaceRectPageComponent', () => {
  let component: FaceRectPageComponent;
  let fixture: ComponentFixture<FaceRectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceRectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceRectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
