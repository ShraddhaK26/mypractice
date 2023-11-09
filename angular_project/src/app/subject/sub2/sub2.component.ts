import { Component } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.scss']
})
export class Sub2Component {
  name!:string;
constructor(private collectionservice:CollectionService){

}

ngOnInit(){
this.collectionservice.nameSubjectData.subscribe(name=>{
this.name=name;
})
}
}
