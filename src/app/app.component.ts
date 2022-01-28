import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  favoris = [
    {
      name: 'Shingeki no Kyojin',
      active: true
    },
    {
      name: 'Naruto',
      active: false 
    },
    {
      name: 'My Hero Academia',
      active: false 
    }
  ];

  title = 'api';
}
