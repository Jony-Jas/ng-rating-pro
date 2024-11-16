# CONTRIBUTING

Thank you for your interest in contributing to **ngRatingPro**!

---

## Getting Started

This repository contains both the **library** and a **demo application** for testing and development.

### Steps to Start Contributing

1. **Build the Library**:

   ```bash
   ng build ngRatingPro
   ```

2. **Link the Library Locally**: Navigate to the `dist` folder and link the library:

   ```bash
   cd ../dist/ng-rating-pro
   npm link
   ```

3. **Connect the Library to the Demo App**: Go back to the demo project and link the library:

   ```bash
   cd ../projects/demo
   npm link ng-rating-pro
   ```

4. **Serve the Demo Application**: Navigate to the root project directory and serve the demo:

   ```bash
   cd ../../
   ng serve demo
   ```

5. **Start Making Changes**: You can now modify the ngRatingPro module, and build it after any changes to get reflected in the demo application.
