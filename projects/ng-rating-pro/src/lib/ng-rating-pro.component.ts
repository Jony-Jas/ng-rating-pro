import { Component, HostListener, Input, OnInit } from '@angular/core';

enum State {
  Empty = 'empty',
  Half = 'half',
  Full = 'full',
}

@Component({
  selector: 'ngRatingPro',
  templateUrl: './ng-rating-pro.component.html',
  styleUrls: ['./ng-rating-pro.component.css'],
})
export class NgRatingProComponent implements OnInit {
  @Input() scale: number = 5;
  @Input() rating: number = 0;
  @Input() allowHalf: boolean = true;
  @Input() size: number = 20; // Default size
  @Input() spacing: number = 8; // Spacing between stars in viewBox units
  @Input() readonly: boolean = false;

  public states: State[] = [];

  starWidth: number = 19; // Original SVG viewBox width
  starHeight: number = 18; // Original SVG viewBox height
  containerWidth: number = 0;
  totalWidth: number = 0;

  ngOnInit() {
    this.updateDimensions();
    this.updateStates(this.allowHalf);
  }

  updateDimensions() {
    // Calculate total width in viewBox units
    this.totalWidth =
      this.starWidth * this.scale + this.spacing * (this.scale - 1);

    // Calculate container width maintaining aspect ratio
    const aspectRatio = this.totalWidth / this.starHeight;
    this.containerWidth = this.size * aspectRatio;
  }

  getStarPosition(index: number): number {
    return index * (this.starWidth + this.spacing);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.readonly) return;
    if (event.target instanceof SVGElement && +event.target.id > 0) {
      const clickedIndex = +event.target.id - 1;
      this.toggleRating(clickedIndex);
      this.updateStates(this.allowHalf);
    }
    event.stopPropagation();
  }

  private toggleRating(index: number) {
    const isFull = this.rating === index + 1;
    const isHalf = this.rating === index + 0.5;

    if (this.allowHalf) {
      if (isFull) {
        this.rating = index;
      } else if (isHalf) {
        this.rating = index + 1;
      } else {
        this.rating = index + 0.5;
      }
    } else {
      if (isFull) {
        this.rating = index;
      } else {
        this.rating = index + 1;
      }
    }
  }

  private updateStates(allowHalf: boolean) {
    this.rating = Math.round(this.rating * 2) / 2;
    this.states = Array.from({ length: this.scale }, (_, i) => {
      if (i < Math.floor(this.rating)) return State.Full;
      if (i === Math.floor(this.rating) && this.rating % 1 !== 0 && allowHalf)
        return State.Half;
      return State.Empty;
    });
  }
}
