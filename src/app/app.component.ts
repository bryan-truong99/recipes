import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  clickState: string = 'recipe';

  onNav(link:string)
  {
    this.clickState = link;
  }
}
