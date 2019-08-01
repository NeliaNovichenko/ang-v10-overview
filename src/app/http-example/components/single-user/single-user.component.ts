import { Component, HostBinding } from '@angular/core';
import { ReqResService } from '../../services/req-res.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  userId?: number;
  user: User;
  userIsLoading = false;

  constructor(private service: ReqResService) {}

  get buttonIsDisabled() {
    return this.userId === undefined;
  }

  onIdInput(value: number) {
    this.userId = value;
  }

  onLoadClick() {
    this.userIsLoading = true;
    this.service.getUser(this.userId).subscribe(r => {
      this.userIsLoading = false;
      this.user = r.data;
    });
  }
}
