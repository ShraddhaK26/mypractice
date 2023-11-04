import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  
 
  constructor(private router : Router,private collectionService : CollectionService){
  
  }
  
    home(){
       this.router.navigateByUrl('home');
    }
    test(){

      this.router.navigateByUrl('test');
    }
      
    adminMod(){
      this.router.navigateByUrl('Adminmodule/adminlogin');
    }

    principleModLoad(){
      this.router.navigateByUrl('PrincipleMod/principleHome')
  
    }

    
   
  }