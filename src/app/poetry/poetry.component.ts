import {Component, inject, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgIf,NgForOf} from "@angular/common";

@Component({
  selector: 'app-poetry',
  standalone: true,
  imports: [NgIf,NgForOf,HttpClientModule],
  templateUrl: './poetry.component.html',
  styleUrl: './poetry.component.sass'
})
export class PoetryComponent  implements OnInit {
  public data:any;
  constructor(private http:HttpClient) {}
  private DataService = inject(DataService);

  poem = "";

  ngOnInit():void {

    this.DataService.currentPoem.subscribe(poem=>{
      console.log('author',poem)
      this.poem = poem;
      if (poem != undefined){
        this.fetchPoem();
      }
    })
  }
  public fetchPoem() {
    this.http.get("https://poetrydb.org/title/"+ this.poem +"/lines.json").subscribe(
      (resp:any) => {
        console.log('titles are',resp[0])
        this.data = resp[0]
      }
    )
  }

}
