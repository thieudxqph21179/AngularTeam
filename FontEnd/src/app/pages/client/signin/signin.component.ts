import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  isSubmitted = false;
  errorMessage = '';
  userForm = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })
  constructor(
    private UserService: UserService,
    private FormBuilder: FormBuilder,
    private Router: Router
  ) { }
  onHandleSignin() {
    if (this.userForm.valid) {
      const user: IUser = {
        email: this.userForm.value.email || "",
        password: this.userForm.value.password || "",
      }
      this.UserService.signin(user).subscribe(response => {
        localStorage.setItem("user", JSON.stringify(response));
        const storedUser: any = localStorage.getItem('user');
        const { user } = JSON.parse(storedUser);
        if (user.role == "admin") {
          this.Router.navigate(['/admin']);
        } else {
          this.Router.navigate(['/']);
        }
      })
    }
  }
}
