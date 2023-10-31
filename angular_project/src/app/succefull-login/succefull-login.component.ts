import { Component } from '@angular/core';

@Component({
  selector: 'app-succefull-login',
  templateUrl: './succefull-login.component.html',
  styleUrls: ['./succefull-login.component.scss']
})
export class SuccefullLoginComponent {
  toAdd: boolean = false;
  tocity: boolean = false;
  flowers = ['Lilly', 'Lotus', 'Rose', 'Hibiscus', 'Champa'];
  employee = [{ emp_Name: 'Diksha', emp_age: '20' }, { emp_Name: 'Richa', emp_age: '21' }, { emp_Name: 'priya', emp_age: '24' }];
  inputValue:any;
  data:any;
  rating: any = 4;



  Adress() {
    //this.toAdd=true;
    this.toAdd = !this.toAdd;

  }

  cityy() {
    //this.tocity=true;
    this.tocity = !this.tocity;
  }

  flower() {

  }

  inputBoxVal() {
    console.log(this.inputValue);
    this.data.push(this.inputValue)
  }

  getCss() {
    return 'black';
  }

}
