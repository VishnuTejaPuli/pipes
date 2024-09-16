import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pipes';
   text: string = "Angular!";
 today: Date = new Date();
amount: number=123.45667;
pi: number=3.141589;
observable$= of('Async Pipe');



}
