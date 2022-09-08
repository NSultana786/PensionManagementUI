import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  public loggedIn=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn()
  }

  logoutUser(){
    this.loginService.logout()
    this.loggedIn=false
    //location.reload()
  }

}
