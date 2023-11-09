import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
userNameee:any;
inputBox:any;
nameSubjectData = new Subject<string>();
  constructor() { }
}
