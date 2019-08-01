import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableExampleComponent } from './observable-example-component/observable-example.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ObservableExampleComponent }
];

@NgModule({
  declarations: [ObservableExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ObservableExampleModule { }
