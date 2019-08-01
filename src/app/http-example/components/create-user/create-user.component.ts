import { Component } from '@angular/core';
import { UserCreateRequestModel } from '../../models/user-create-request-model';
import { ReqResService } from '../../services/req-res.service';

@Component({
  selector: 'app-create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.css']
})
export class CreateUserComponent {
  name?: string;
  job?: string;
  isLoading = false;
  response?: string;
  array = [1, 2, 3, 4];

  constructor(private service: ReqResService) {}

  get buttonIsDisabled() {
    return !this.name || !this.job;
  }

  onNameInput(value: string) {
    this.name = value;
  }

  onJobInput(value: string) {
    this.job = value;
  }

  onCreateClick() {
    this.isLoading = true;

    const user: UserCreateRequestModel = {
      name: this.name,
      job: this.job
    };

    this.service.createUser(user).subscribe(m => {
      this.response = JSON.stringify(m);
      this.isLoading = false;
    });
  }
}
