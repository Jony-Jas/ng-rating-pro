import { NgModule } from '@angular/core';
import { NgRatingProComponent } from './ng-rating-pro.component';
import { StarIconComponent } from './rating-icon/star-icon.component';
import { CommonModule } from '@angular/common';
import { CustomRatingDirective } from './rating-icon/custom-rating.directive';

@NgModule({
  declarations: [
    NgRatingProComponent,
    CustomRatingDirective,
  ],
  imports: [CommonModule],
  exports: [NgRatingProComponent, CustomRatingDirective],
})
export class NgRatingProModule {}
