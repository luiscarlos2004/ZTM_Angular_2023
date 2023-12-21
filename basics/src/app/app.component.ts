import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  // template: `<p>Hello word!</p>`, cannot use both only one at time
  templateUrl: './app.Component.html',
  styleUrls: ['./app.Component.css'],
  // styles:['']
})
export class AppComponent{
  name = 'Luis'
  getName(){
    return this.name
  } 
}
