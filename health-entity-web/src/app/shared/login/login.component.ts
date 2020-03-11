import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private servicioLogin: LoginService, private router: Router) { }// , private userService: UserService) { }

  // user: User = null;

  email: string = null;
  password: string = null;

  incorrectLogin = false;

  ngOnInit(): void { }

  login() {
    this.servicioLogin.login(this.email, this.password).subscribe(data => {
      console.log('yeii');
      this.incorrectLogin = false;
    }, error => {
      this.incorrectLogin = true;
      console.error(error);
    });
  }

}
