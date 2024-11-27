import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-heart-icon',
  templateUrl: './heart-icon.component.html',
})
export class HeartIconComponent {
  static iconName: string = 'heart';
}
