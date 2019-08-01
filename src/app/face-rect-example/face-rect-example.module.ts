import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FaceRectPageComponent } from './components/face-rect-page/face-rect-page.component';
import { FaceRectService } from './services/face-rect.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: FaceRectPageComponent }
];

@NgModule({
  declarations: [FaceRectPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [FaceRectService]
})
export class FaceRectExampleModule { }
