import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
city:any;
dataFromChildComponent:any;
cars = ['audi','TaTa','Suzuki','swift'];

  dataFromChild(data:any){
       console.log(data);
       this.dataFromChildComponent = data;
   }

}
