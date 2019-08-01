import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesExampleComponent } from './pipes-example-component/pipes-example.component';
import { Routes, RouterModule } from '@angular/router';
import { TestPipe } from './test.pipe';
import { TestWithParamsPipe } from './test-with-params.pipe';

const routes: Routes = [
  { path: '', component: PipesExampleComponent }
];

@NgModule({
  declarations: [PipesExampleComponent, TestPipe, TestWithParamsPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PipeExampleModule { }
