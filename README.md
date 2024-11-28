# **NgRatingPro**

A powerful and customizable Angular rating component that allows full and half ratings with support for read-only mode, dynamic scaling, and SVG customization.<br/>Perfect for use in reviews, feedback forms, and rating-based applications.

---

## **Features**

- Fully customizable SVG-based rating stars.
- Support for full and half ratings.
- Adjustable scale, size, and spacing between stars.
- Configurable `readonly` mode for display-only purposes.
- Responsive design with dynamic container sizing.

**Upcoming Features**

- [x] Implement alternative icon options (hearts, emojis, lightning bolts)
- [x] Enable custom icon upload functionality
- [ ] Add hover tooltip information feature
- [ ] Integrate smooth rating transitions and effects
- [ ] Ensure full accessibility compliance (ARIA standards)

---

## **Installation and Usage**

Install the package via npm:

```bash
npm install ng-rating-pro
```

### Step 1: Import the Module

Add the NgRatingProComponent to your Angular module:

```typescript
import { NgModule } from "@angular/core";
import { NgRatingProComponent } from "ng-rating-pro";

@NgModule({
  declarations: [
    // other components
    NgRatingProComponent,
  ],
  exports: [
    NgRatingProComponent, // Make it available for use in other modules
  ],
})
export class AppModule {}
```

### Step 2: Add the Component to Your Template

Use the ngRatingPro selector in your Angular template:

```html
<ngRatingPro [scale]="5" [rating]="3.5" [allowHalf]="true" [size]="24" [spacing]="10" [readonly]="false" (ratingChange)="onRatingChange($event)"></ngRatingPro>
```

### Adding Custom Icons

You can add custom icons by embedding an SVG and applying the `ngCustomRating` directive as shown below:

```html
<ngRatingPro [iconName]="custom-icon" ...otherAttributes>
  <svg:symbol viewBox="0 0 19 18" ngCustomRating ngProjectAs="empty" ...otherAttributes>
    <!-- svg paths -->
  </svg:symbol>

  <svg:symbol viewBox="0 0 19 18" ngCustomRating ngProjectAs="full" ...otherAttributes>
    <!-- svg paths -->
  </svg:symbol>

  <svg:symbol viewBox="0 0 19 18" ngCustomRating ngProjectAs="half" ...otherAttributes>
    <!-- svg paths -->
  </svg:symbol>
</ngRatingPro>
```

#### Key Points:
- Include exactly three `<svg:symbol>` elements, each projected as `empty`, `full`, and `half`.
- Ensure all three symbols have the same `viewBox` for consistent scaling.
- Specify a custom `iconName` for the rating.
- The directive automatically generates an `id` for each symbol in the format: `id='{iconName}-{projectedAs}'`.


---

## **Inputs:**

| Input       | Type    | Default Value | Description                                                                                        |
| ----------- | ------- | ------------- | -------------------------------------------------------------------------------------------------- |
| `scale`     | number  | `5`           | Number of stars to display.                                                                        |
| `rating`    | number  | `0`           | Initial rating value. Can be updated dynamically.                                                  |
| `allowHalf` | boolean | `true`        | Allows half-star ratings when `true`.                                                              |
| `size`      | number  | `20`          | Size of the stars in pixels.                                                                       |
| `spacing`   | number  | `8`           | Space between stars in viewBox units.                                                              |
| `readonly`  | boolean | `false`       | Disables click interactions when set to `true`.                                                    |
| `iconName`  | string  | `star`        | Choose between `star` and `heart` icons for rating or provide a custom icon name for custom icons. |

## **Outputs:**

| Output         | Type   | Description                                          |
| -------------- | ------ | ---------------------------------------------------- |
| `ratingChange` | number | Emits the updated rating whenever a star is clicked. |

### Example:

```typescript
onRatingChange(newRating: number): void {
  console.log('Updated Rating:', newRating);
}
```

---

## Changelog

See `Github Releases` for realease notes and changelog.

---

## Contributing

Contributions are welcome! If you'd like to improve this component:

- Fork the repository.
- Create a feature branch.
- Submit a pull request with detailed explanations.
  > Read `CONTRIBUTIONS.md` for more info.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
