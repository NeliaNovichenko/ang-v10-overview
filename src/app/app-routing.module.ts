import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesExampleComponent } from './pipe-example/pipes-example-component/pipes-example.component';


const routes: Routes = [
  {
    path: 'http-example',
    loadChildren: () => import(`./http-example/http-example.module`).then(m => m.HttpExampleModule),
    data: { title: 'Http Example' }
  },
  {
    // path: 'pipes',
    // component: PipesExampleComponent
    path: 'pipes',
    loadChildren: () => import(`./pipe-example/pipe-example.module`).then(m => m.PipeExampleModule),
    data: { title: 'Pipes Example' }
  },
  {
    path: 'directives',
    loadChildren: () => import(`./directive-example/directive-example.module`).then(m => m.DirectiveExampleModule),
    data: { title: 'Directives Example' }
  },
  {
    path: 'components',
    loadChildren: () => import(`./component-example/component-example.module`).then(m => m.ComponentExampleModule),
    data: { title: 'Components Example' }
  },
  {
    path: 'interceptor-example',
    loadChildren: () => import(`./interceptor-example/interceptor-example.module`).then(m => m.InterceptorExampleModule),
    data: { title: 'Components Example' }
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
