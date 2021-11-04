import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    name: new FormControl("name",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("email@gmail.com",[Validators.email,Validators.required]),
    payementInformations: new FormGroup({
      typeCarte:new FormControl("type",[Validators.required]),
      numero:new FormControl("529819",[Validators.minLength(16),Validators.maxLength(16),Validators.required]),
      dateExpirationet:new FormControl("02/02/2020"),
      code:new FormControl("1979791719797")
    })
  })
  //   userForm = this.fb.group({
  //   name: ["name",[Validators.required,Validators.minLength(3)]],
  //   email: ["emai@gmail.com",[Validators.email,Validators.required]],
  //   payementInformations: this.fb.group({
  //     typeCarte:["type",[Validators.required]],
  //     numero:["55555",[Validators.minLength(16),Validators.maxLength(16),Validators.required]],
  //     dateExpirationet:["02/02/2020"],
  //     code:["bfb4684be"]
  //   })
  // })

    get name() {
    return this.userForm.get('name');
    }

   get email() {
    return this.userForm.get('email');
    }

    get typeCarte() {
    return this.userForm.get('payementInformations')?.get("typeCarte");
    }

   get numero() {
    return this.userForm.get('payementInformations')?.get("numero");
    }

}
