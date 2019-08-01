import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptorComponent } from './interceptor-component/interceptor.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ReqResService } from './services/req-res.service';


const routes: Routes = [
  { path: '', component: InterceptorComponent }
];

@NgModule({
  declarations: [InterceptorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    ReqResService,
    AuthService,
    JwtService,
    { provide: Window, useValue: window },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
})
export class InterceptorExampleModule { }
