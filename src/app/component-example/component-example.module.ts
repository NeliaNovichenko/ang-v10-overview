import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example-component/example.component';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: '', component: ExampleComponent }
];

@NgModule({
  declarations: [ExampleComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentExampleModule { }
