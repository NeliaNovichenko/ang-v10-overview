import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { MainComponent } from './components/main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ServicesModule } from './services/services.module';


const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    ListUsersComponent,
    SingleUserComponent,
    CreateUserComponent,
    DeleteUserComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    RouterModule.forChild(routes),
  ]
})
export class HttpExampleModule { }
