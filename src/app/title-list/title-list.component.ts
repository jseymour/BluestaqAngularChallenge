import {Component, inject, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {NgIf,NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-title-list',
  standalone: true,
  imports: [NgIf,NgForOf,HttpClientModule],
  templateUrl: './title-list.component.html',
  styleUrl: './title-list.component.sass'
})
export class TitleListComponent  implements OnInit{
  public data:any;
  constructor(private http:HttpClient) {}
  private DataService = inject(DataService);

  author = "";
  ngOnInit():void {

    this.DataService.currentAuthor.subscribe(author=>{
      this.author = author;
      if (author != undefined){
        this.fetchPoems();
      }
    })
  }
  savePoem(newPoem:any){
    this.DataService.setPoem(newPoem);
  }

  selected = "";

  update(e:any){
    this.selected = e.target.value;
    this.savePoem(this.selected);
    console.log('this.selected',e.target.value)
  }

  public fetchPoems() {
    this.http.get("https://poetrydb.org/author/"+ this.author +"/title").subscribe(
      (resp:any) => {
        console.log('titles are',resp)
        if (resp.status === 404) {
          console.log('we have a 404 - still trying to get the page routing to work in Angular 17');
          // redirect to some page - can't figure out why this isn't rerouting to the home page..
        } else {
          this.data = resp
        }
      }
    )
  }

}
