import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Application';

  city:string='Kolhapur....';
num1=100;
num2=200;
city2='nagpur' ;
  fun1=true;
  fun2=false;
  demo1 = 1000;
  genderM = 'Male';
  genderF = 'Female';
  no1:any=20;
  no2:any=30;
 result?:any



  flowers:string[]=['Lily','lotus','Rose','hibiscus'];
  flower=this.flowers[1];
emplooyee = {name:'jayash', company:'Tcs'}


  


    gen(data?: any) {
      console.log('data', data?.target.value);
  
    }

    addition(){

      this.result = parseInt(this.no1) + parseInt(this.no2);
      console.log('addition', this.addition);
      
    }


   
  }

   

    
  

  





 



