import { Component } from '@angular/core';
import { User } from '../../models/user';
import { map, filter, tap, take } from 'rxjs/operators';
import { ReqResService } from '../../services/req-res.service';
import { UsersPage } from '../../models/users-page';

@Component({
  selector: 'app-list-users',
  templateUrl: 'list-users.component.html',
  styleUrls: ['list-users.component.css']
})
export class ListUsersComponent {
  page = 1;
  users: User[] = [];
  isLoading = false;

  constructor(private service: ReqResService) {}

  onLoadClick() {
    this.isLoading = true;
    this.service.getUsers(this.page)
      .pipe(
        filter(users => !!users),
        tap(console.log)
    )
      .subscribe((p: UsersPage) => {
      this.isLoading = false;
      this.users.push(...p.data);
      this.page++;
    },
      e => {
        console.log(e);
        },
      console.log
    );
  }
}
