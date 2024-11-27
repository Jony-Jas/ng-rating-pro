import {
  Component,
  ComponentFactoryResolver,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CustomRatingDirective } from './rating-icon/custom-rating.directive';
import { StarIconComponent } from './rating-icon/star-icon.component';
import { HeartIconComponent } from './rating-icon/heart-icon.component';

export enum State {
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
  @Input() iconName: string = 'star';

  @ContentChildren(CustomRatingDirective)
  ratingDirectives!: QueryList<CustomRatingDirective>;
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  dynamicContainer!: ViewContainerRef;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  public states: State[] = [];

  starWidth: number = 24;
  starHeight: number = 24;
  containerWidth: number = 0;
  totalWidth: number = 0;

  ngOnInit() {
    this.updateStates(this.allowHalf);
  }

  ngAfterContentInit() {
    if (this.ratingDirectives.length !== 3) {
      this.loadDynamicComponent();
    } else {
      this.ratingDirectives.forEach((directive) => {
        directive.updateRating(this.iconName);
      });
      this.starHeight = this.ratingDirectives.first.iconViewBox[3];
      this.starWidth = this.ratingDirectives.first.iconViewBox[2];
    }
    this.updateDimensions();
  }

  private loadDynamicComponent() {
    const component = this.getComponent();
    this.dynamicContainer.clear();
    this.dynamicContainer.createComponent(component);
    this.iconName = component.iconName;
  }

  private getComponent() {
    switch (this.iconName) {
      case 'star':
        return StarIconComponent;
      case 'heart':
        return HeartIconComponent;
      default:
        return StarIconComponent;
    }
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

  public updateStates(allowHalf: boolean) {
    this.ratingChange.emit(this.rating);
    this.rating = Math.round(this.rating * 2) / 2;
    this.states = Array.from({ length: this.scale }, (_, i) => {
      if (i < Math.floor(this.rating)) return State.Full;
      if (i === Math.floor(this.rating) && this.rating % 1 !== 0 && allowHalf)
        return State.Half;
      return State.Empty;
    });
  }
}
