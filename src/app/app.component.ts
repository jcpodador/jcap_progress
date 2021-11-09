import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progressBarProject';

  label = 'Project Status';

  max = 100;
  value = 85;

  onChange(progressValue:any) {
    console.log("Progress is " + progressValue +"%")
  }
  onClick(progressValue:any) {
    console.log("Progress is " + progressValue +"%")
  }
}
