import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title = 'sample';  // declaring a to 1
  title2 = 'more trailint';   
  getRandomNumber(){
    return 4; // chosen by fair dice roll.
              // guaranteed to be random.
  }
}
