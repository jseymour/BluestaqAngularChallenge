import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {DataService} from "../data.service";

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [HttpClientModule, NgForOf],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.sass'
})
export class AuthorListComponent   implements OnInit{
  public data:any;
  constructor(private http:HttpClient) {}
  private DataService = inject(DataService);

  saveAuthor(newAuthor:any){
    this.DataService.setAuthor(newAuthor)
  }

  ngOnInit():void {
    this.fetchPoetry()
  }

  selected = "----";

  update(e:any){
    this.selected = e.target.value
    this.saveAuthor(this.selected);
  }


  public fetchPoetry() {
    this.http.get("https://poetrydb.org/author").subscribe(
      (resp:any) => {
        console.log('resep is',resp.authors)
        this.data = resp.authors
      }
    )
  }
}
