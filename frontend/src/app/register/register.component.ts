import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //======================properties=======================
  
  submitted = false;

  user_data:any
  userForm! : FormGroup;

  constructor(private users:UsersService,private path:Router) { }



  ngOnInit(): void {

    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      ConfirmPassword: new FormControl('', [Validators.required])
    })
  }

  AddUser(form : FormGroup){

    this.users.AddUser(form.value).subscribe((my_data)=>{

      console.log("From the Service",my_data)

      this.path.navigate(['/dash'])

    })
  }
}

