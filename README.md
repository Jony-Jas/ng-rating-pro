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

- [ ] Implement alternative icon options (hearts, emojis, lightning bolts)
- [ ] Enable custom icon upload functionality
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

```typescript
<ngRatingPro
  [scale]="5"
  [rating]="3.5"
  [allowHalf]="true"
  [size]="24"
  [spacing]="10"
  [readonly]="false"
  (ratingChange)="onRatingChange($event)"
></ngRatingPro>
```

---

## **Inputs:**

| Input       | Type    | Default Value | Description                                       |
| ----------- | ------- | ------------- | ------------------------------------------------- |
| `scale`     | number  | `5`           | Number of stars to display.                       |
| `rating`    | number  | `0`           | Initial rating value. Can be updated dynamically. |
| `allowHalf` | boolean | `true`        | Allows half-star ratings when `true`.             |
| `size`      | number  | `20`          | Size of the stars in pixels.                      |
| `spacing`   | number  | `8`           | Space between stars in viewBox units.             |
| `readonly`  | boolean | `false`       | Disables click interactions when set to `true`.   |

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

See `CHANGELOG.md` for realease notes and changelog.

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
