import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveExampleComponent } from './directive-example-component/directive-example.component';
import { RouterModule, Routes } from '@angular/router';
import { TestDirective } from './test.directive';

const routes: Routes = [
  { path: '', component: DirectiveExampleComponent }
];

@NgModule({
  declarations: [DirectiveExampleComponent, TestDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DirectiveExampleModule { }
