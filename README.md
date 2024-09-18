# Business Card Generator

Welcome to the **Business Card Generator** by Resultados Digitais! This application allows users to create personalized digital business cards. This project was developed as a technical test to demonstrate skills in web development, accessibility best practices, SEO, and semantic HTML.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Running](#installation-and-running)
- [How to Use](#how-to-use)
- [Important Link](#important-link)
- [Contributing](#contributing)
- [License](#license)

## Overview

The application has two main pages:

1. **Form**: Where users fill in required fields to generate their business card.
2. **Result**: Where users view the generated card and can interact with download and return options.

## Features

- **Creation Form**:
  - Required fields: Name, Email, and Phone.
  - Validations:
    - Name: Must be at least two characters long.
    - Email: Must be a valid email address.
    - Phone: Must follow the format `(99) 9999[9]-9999` (the digit in brackets is optional).
- **Business Card**:
  - Displays the data filled in the form.
  - Download button (disabled, no actions).
  - Return button to clear the form fields and return to the previous page.
  - Link to “try RD Station Marketing for free” which opens in a new tab.

## Technologies Used

- **Frontend**:
  - Next.js
  - TypeScript
  - TailwindCSS
  - React
- **Other**:
  - Figma (for responsive layout design)

## Installation and Running

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/oarthurzanoni/rd-station-generator-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rd-station-generator-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to http://localhost:3000.

## How to Use

1. **Fill out the form** on the first page with Name, Email, and Phone.
2. **Proceed** to view the generated business card.
3. Use the **return button** to clear the fields and go back to the home page.
4. The **download button** is disabled and has no actions.
5. Click on the **link** to “try RD Station Marketing for free” to be redirected to a new tab.

License
This project is licensed under the MIT License.

## License

This project is licensed under the MIT License.
