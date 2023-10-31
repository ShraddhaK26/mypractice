import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principle-signup',
  templateUrl: './principle-signup.component.html',
  styleUrls: ['./principle-signup.component.scss']
})
export class PrincipleSignupFormComponent {

  PrincipleSignupForm! : FormGroup;
  age = 20;
  todayDate = new Date();
  userAge: any;
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  isGenderSelected:boolean=true
  pass=true;
  constructor( public fb : FormBuilder){}

  ngOnInit(){
   this.formDetails();
   console.log(this.todayDate,);

    
  }

  formDetails(){
    this.PrincipleSignupForm = this.fb.group({
      userName : ['Shraddha',[Validators.maxLength(10),Validators.minLength(5),Validators.pattern('[a-zA-Z ]+')]],
      email:[,[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      mobNo:['',[Validators.pattern('[0-9+]*')]],
     // dob:['',[Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/)]]
     dob:['',[Validators.pattern(this.datePattern)]],
     CT:[false,Validators.requiredTrue],
     gender:[''],
     seepass:[''],
     Flowers:[],
     oldWord:['',this.restrictionOfWord]
    })
  }
  
  submit(){
    let gender = this.PrincipleSignupForm.value.gender
    if(gender){
      console.log('gender value',this.PrincipleSignupForm.value);
    }
    else{
      this.isGenderSelected=false
      return
    }
    
    
  }

  calY(){
      let dobFieldValue = this.PrincipleSignupForm.value.dob;
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
    this.pass =!this.pass;
    
  }

  restrictionOfWord(word1:any){
    let word = word1.value?.toLowerCase().split(' ');
    let isIncludeOld = word.includes('old');
    return isIncludeOld ? { 'oldWord': true } : null;
  }
  }












  

