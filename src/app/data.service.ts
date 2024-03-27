import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private PoetSource = new BehaviorSubject<any>(null);
  private Poem = new BehaviorSubject<any>(null);
  currentAuthor = this.PoetSource.asObservable();
  currentPoem = this.Poem.asObservable()
  constructor() {}

  setAuthor(title:any){
    this.PoetSource.next(title)
  }
  setPoem(poem:any){
    this.Poem.next(poem)
  }

}
