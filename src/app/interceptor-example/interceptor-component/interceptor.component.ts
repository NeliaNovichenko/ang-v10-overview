import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReqResService } from '../services/req-res.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.scss']
})
export class InterceptorComponent implements OnInit {

  constructor(private authService: AuthService, private reqResService: ReqResService) { }

  ngOnInit() {
  }


  logIn() {
    this.authService.signIn(null).subscribe(console.log);
  }

  sendSomeRequests() {
    this.reqResService.getUser(1).subscribe(console.log);
  }
}
