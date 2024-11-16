import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgRatingProComponent, State } from './ng-rating-pro.component';
import { By } from '@angular/platform-browser';

describe('NgRatingProComponent', () => {
  let component: NgRatingProComponent;
  let fixture: ComponentFixture<NgRatingProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgRatingProComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgRatingProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the correct default values', () => {
    expect(component.scale).toBe(5);
    expect(component.rating).toBe(0);
    expect(component.allowHalf).toBe(true);
    expect(component.size).toBe(20);
    expect(component.spacing).toBe(8);
    expect(component.readonly).toBe(false);
  });

  it('should calculate container width based on the scale and size', () => {
    const expectedWidth =
      (component.starWidth * component.scale +
        component.spacing * (component.scale - 1)) *
      (component.size / component.starHeight);
    expect(component.containerWidth).toBeCloseTo(expectedWidth, 2);
  });

  it('should update states correctly when rating is changed', () => {
    // Set rating to 3
    component.rating = 3;
    component.updateStates(component.allowHalf);
    expect(component.states).toEqual([
      State.Full,
      State.Full,
      State.Full,
      State.Empty,
      State.Empty,
    ]);

    // Set rating to 2.5 (half rating enabled)
    component.rating = 2.5;
    component.updateStates(component.allowHalf);
    expect(component.states).toEqual([
      State.Full,
      State.Full,
      State.Half,
      State.Empty,
      State.Empty,
    ]);
  });

  it('should correctly calculate star positions', () => {
    const position = component.getStarPosition(2); // Check position of 3rd star
    const expectedPosition = 2 * (component.starWidth + component.spacing);
    expect(position).toBe(expectedPosition);
  });

  it('should have correct number of stars in the DOM based on scale', () => {
    const stars = fixture.debugElement.queryAll(By.css('use'));
    expect(stars.length).toBe(component.scale); // Should have number of stars equal to the scale
  });

  it('should have correct symbol references for star states', () => {
    component.rating = 2.5;
    component.updateStates(component.allowHalf);
    fixture.detectChanges();

    const stars = fixture.debugElement.queryAll(By.css('use'));
    expect(stars[0].nativeElement.getAttribute('xlink:href')).toBe(
      '#star-full'
    );
    expect(stars[1].nativeElement.getAttribute('xlink:href')).toBe(
      '#star-full'
    );
    expect(stars[2].nativeElement.getAttribute('xlink:href')).toBe(
      '#star-half'
    );
    expect(stars[3].nativeElement.getAttribute('xlink:href')).toBe(
      '#star-empty'
    );
    expect(stars[4].nativeElement.getAttribute('xlink:href')).toBe(
      '#star-empty'
    );
  });
});
