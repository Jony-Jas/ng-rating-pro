import { NgModule } from '@angular/core';
import { NgRatingProComponent } from './ng-rating-pro.component';
import { StarIconComponent } from './rating-icon/star-icon.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgRatingProComponent, StarIconComponent],
  imports: [CommonModule],
  exports: [NgRatingProComponent],
})
export class NgRatingProModule {}
