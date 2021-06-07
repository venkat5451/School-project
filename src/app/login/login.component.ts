import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email:string;
 password:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
login(){
 // console.log(this.email);
 if(this.email=="v@gmail" && this.password=="111" ){
   console.log(this.email);
   
   this.router.navigate[('../career')];
   console.log("success");
   
   
 } 
 else
 {
   alert("plz give write crediantials")
 }
  
}
}
