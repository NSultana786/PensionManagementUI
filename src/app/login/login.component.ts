import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    userid: "",
    upassword: "",
    uname: ""
  }
  loginError = '';
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log("form submitted");
    if ((this.credentials.userid != '' && this.credentials.upassword != '') &&
      (this.credentials.userid != null && this.credentials.upassword != null)) {
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          console.log("success");
          console.log(response);
          this.loginService.loginUser(response.authToken, response.userid);
          // window.location.href = "/pensionDetails";
          this.router.navigate(['/pensionDetails']);
        },
        error => {
          console.log("error");
          console.log(error);
          this.loginError = "Invalid Credentials"
        }
      );
    } else {
      this.loginError = "Missing Credentials"
    }
  }
}
