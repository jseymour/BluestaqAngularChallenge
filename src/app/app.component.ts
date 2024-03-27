import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorListComponent} from "./author-list/author-list.component";
import {TitleListComponent} from "./title-list/title-list.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {PoetryComponent} from "./poetry/poetry.component";;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorListComponent, TitleListComponent, PoetryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'BluestaqAngularChallenge';

}
