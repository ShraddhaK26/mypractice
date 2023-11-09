import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-sub-landing',
  templateUrl: './sub-landing.component.html',
  styleUrls: ['./sub-landing.component.scss']
})
export class SubLandingComponent {
  subjectForm!:FormGroup;
  constructor(private fb: FormBuilder,
    private collectionService :CollectionService){}

    ngOnInit(){
      this. subjectInformationForm();
    }

    subjectInformationForm(){
      this.subjectForm=this.fb.group({
        name:[],
        password:[]
      });
    }






  submit(){
    this.collectionService.nameSubjectData.next(this.subjectForm.value.name);
    
 }
}
