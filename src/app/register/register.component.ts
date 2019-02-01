import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router }from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private auth : AuthService,private router : Router) { }

  ngOnInit() {
  }
  Register(event){
    event.preventDefault()
    const errors= []
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    if (username == password){
      alert("Username and password can not be same.")
    }
    if(errors.length > 0){
      this.auth.register(username,password).subscribe( data =>{
        console.log(data)
        if(data.success){
          this.router.navigate(['login'])
        }
      })
    }
    console.log(username,password)
  }

}
