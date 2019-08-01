import { NgModule, InjectionToken } from '@angular/core';
import { ReqResService } from './req-res.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ReqResService
  ],
  exports: [
    HttpClientModule
  ]
})
export class ServicesModule {}
