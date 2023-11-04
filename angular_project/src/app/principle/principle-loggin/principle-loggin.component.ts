import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';


@Component({
  selector: 'app-principle-loggin',
  templateUrl: './principle-loggin.component.html',
  styleUrls: ['./principle-loggin.component.scss']
})
export class PrincipleLogginComponent {

constructor(private router:Router, private collectionService:CollectionService){}




username:any;
  showLoginForm = true;
  newPassword: any;
  confirmPassword: any;
  isMatch: boolean = false;



  forgetPassword() {
    this.showLoginForm = false;
  }


  passwordMatch(newPassword:any,confirmPassword:any){
    if (newPassword == confirmPassword) {
      this.isMatch = false;
    } else {
      this.isMatch = true;
    }
  }

 
  submit(form: any) {
    console.log(form);
    this.collectionService.userNameee=form.username;
    this.router.navigateByUrl('PrincipleMod/loginsucess');

  }

}
