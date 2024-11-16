import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';

  onRatingChange(newRating: number): void {
    console.log('Updated Rating:', newRating);
  }
}
