import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 
@Input() CityFromParentComponant:any;
name:any;
@Output() childEvent = new EventEmitter <any>();


submit(){
  this.childEvent.emit(this.name)

}
}


