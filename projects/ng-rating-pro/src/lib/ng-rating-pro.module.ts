import { NgModule } from '@angular/core';
import { NgRatingProComponent } from './ng-rating-pro.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    NgRatingProComponent,
    RatingComponent
  ],
  imports: [
  ],
  exports: [
    NgRatingProComponent
  ]
})
export class NgRatingProModule { }
