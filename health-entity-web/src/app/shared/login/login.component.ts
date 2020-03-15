import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private servicioLogin: LoginService, private router: Router, private userService: UserService) { }

  user: User = null;
  email: string = null;
  password: string = null;

  incorrectLogin = false;

  ngOnInit(): void { }

  login() {
    this.servicioLogin.login(this.email, this.password).subscribe(data => {
      this.incorrectLogin = false;
      this.userService.findByEmailPassword(this.email, this.password)
        .subscribe(result => {
          this.user = result;
          // TODO navigate to home of the respective user using role
        },
        error => {
          console.error(error);
        });
    }, error => {
      this.incorrectLogin = true;
      console.error(error);
    });
  }

}
