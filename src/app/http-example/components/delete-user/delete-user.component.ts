import { Component } from '@angular/core';
import { ReqResService } from '../../services/req-res.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: 'delete-user.component.html',
  styleUrls: ['delete-user.component.css']
})
export class DeleteUserComponent {
  userId?: number;
  isLoading = false;
  isDeleted = false;

  constructor(private service: ReqResService) {}

  get buttonIsDisabled() {
    return this.userId === undefined;
  }

  onIdInput(value: number) {
    this.userId = value;
  }

  onDeleteClick() {
    this.isLoading = true;
    this.service.deleteUser(this.userId).subscribe(() => {
      this.isLoading = false;
      this.isDeleted = true;
    }
    );
  }
}
