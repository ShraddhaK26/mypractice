import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 
@Input() CityFromParentComponant:any;
@Output() childDataEvent = new EventEmitter<any>();
data:any;
@Input() CarsDataFromParent:any;



submit(){
  this.childDataEvent.emit(this.data);
 
}
}


