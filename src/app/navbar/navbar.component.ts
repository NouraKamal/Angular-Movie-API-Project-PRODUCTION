import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
isLogin:boolean=false;
  constructor(private _AuthService:AuthService) {
  _AuthService.currentUser.subscribe(()=>{
    if(_AuthService.currentUser.getValue()!=null){
this.isLogin=true
    }
    else{
      this.isLogin=false
    }
  })
   }
   isLogOut(){
     this._AuthService.logOut()
   }
  ngOnInit(): void {
  }

}
