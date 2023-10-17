import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principle-signup',
  templateUrl: './principle-signup.component.html',
  styleUrls: ['./principle-signup.component.scss']
})
export class psignupFormComponent {

  psignupForm! : FormGroup;
  age = 20;
  todayDate = new Date();
  userAge: any;
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  isGenderSelected:boolean=true
  showpass=true;
  constructor( public fb : FormBuilder){}

  ngOnInit(){
   this.formDetails();
   console.log(this.todayDate,);

    
  }

  formDetails(){
    this.psignupForm = this.fb.group({
      userName : ['Shraddha',[Validators.maxLength(10),Validators.minLength(5),Validators.pattern('[a-zA-Z ]+')]],
      email:[,[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      mobNo:['',[Validators.pattern('[0-9+]*')]],
     // dob:['',[Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/)]]
     dob:['',[Validators.pattern(this.datePattern)]],
     CT:[false,Validators.requiredTrue],
     gender:[''],
     seepass:['']
    })
  }
  
  submit(){
    let gender = this.psignupForm.value.gender
    if(gender){
      console.log('f data',this.psignupForm.value);
    }
    else{
      this.isGenderSelected=false
      return
    }
    
    
  }

  calYear(){
      let dobFieldValue = this.psignupForm.value.dob;
      let todayFullYear = this.todayDate.getFullYear();
      let splitedDate = dobFieldValue?.split('/');
      let usersFullYear = splitedDate[2];
      this.userAge = todayFullYear - usersFullYear;
  }
  gender(){
    this.isGenderSelected = true;

  }

  seepass(){
    console.log('passssssss');
    this.showpass =!this.showpass;
    
  }
}

 









  

