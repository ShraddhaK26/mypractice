import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CollectionService } from 'src/app/services/collection.service';
import { Sub1Component } from '../sub1/sub1.component';

@Component({
  selector: 'app-sub-landing',
  templateUrl: './sub-landing.component.html',
  styleUrls: ['./sub-landing.component.scss']
})
export class SubLandingComponent {
  subjectForm!:FormGroup;
  @ViewChild(Sub1Component) Sub1ComponentRef!:Sub1Component;
  @ViewChild('sentence') sentenceEleRef!  : ElementRef;
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

 Viewchild(){
this.Sub1ComponentRef.dataInViewChildType=this.subjectForm.value.name;
 }
 ngAfterViewInit(){
  console.log(this.sentenceEleRef);
  this.sentenceEleRef.nativeElement.innerHTML='HardWork';
  
 }
}
