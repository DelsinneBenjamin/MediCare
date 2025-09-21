import { Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

    userService = inject(UserService)
    protected readonly currentUser = this.userService.currentUser;

}
