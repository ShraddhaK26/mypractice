import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-principle-home',
  templateUrl: './principle-home.component.html',
  styleUrls: ['./principle-home.component.scss']
})
export class PrincipleHomeComponent {
  inputValue :any;
  constructor(public route:Router , 
   private collectionService:CollectionService){}

  

  signUp(){
   // debugger
   this.route.navigateByUrl('PrincipleMod/signUp');
  }
  Login(){
    this.route.navigateByUrl('PrincipleMod/Login');
  }
}

