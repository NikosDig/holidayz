# Holidaze Front-End Application

## Overview

Holidaze is a modern accommodation booking platform where users can book holidays at various venues. This project focuses on developing the front-end interface for the Holidaze website, including both the customer-facing and admin-facing features. It integrates with an existing API to handle all data-related operations.

## Features

### Customer Features

- View a list of venues.
- Search for a specific venue.
- View a detailed venue page by ID.
- Check a venue's availability using a calendar.
- Register as a customer (with a `stud.noroff.no` email).
- Create bookings at venues.
- View upcoming bookings.

### Admin Features (Venue Manager)

- Register as a venue manager (with a `stud.noroff.no` email).
- Create, update, and delete venues they manage.
- View bookings for managed venues.

### General Features

- User login and logout functionality.
- User avatar update.
- Integration with the official API.

## Technical Stack

### Front-End Technologies

- **JavaScript Framework**: React 18.2
- **CSS Framework**: Styled-components
- **Routing**: React Router
- **Date Handling**: date-fns
- **API Integration**: Custom API integration with Holidaze API

## Setup and Installation

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)
- Git

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NikosDig/holidayz.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd holidayz
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

5. **Build the project for production:**

   ```bash
   npm run build
   ```

## Development

### Available Scripts

- ``: Runs the app in development mode.
- ``: Builds the app for production to the `build` folder.
- ``: Runs the test suite.
- ``: Ejects the configuration for advanced customizations.

### Code Quality

- ESLint and Prettier are used for maintaining code quality and formatting.

## Project Links

- **Gantt Chart**: [Link to Gantt Chart]
- **Design Prototype**: [Link to Figma/Adobe XD Prototype]
- **Style Guide**: [Link to Style Guide]
- **Kanban Board**: [Link to Trello/Kanban Board]
- **Repository Link**: [https://github.com/NikosDig/holidayz](https://github.com/NikosDig/holidayz)
- **Hosted Application Demo**: [Link to Live Demo]

## Testing

### API Testing

- Ensure the API is running and accessible.
- Test features like venue listing, booking, and user authentication.

### UI Testing

- Verify responsiveness of all UI components.
- Ensure all forms function correctly (registration, booking, login).

## Deployment

The project is hosted using an approved static hosting platform, such as:

- Netlify
- GitHub Pages

## Technical Details

### Dependencies

- **React 18.2**: For building the user interface.
- **React Router**: For handling routing.
- **Styled-components**: For component-level styling.
- **date-fns**: For managing and formatting dates.
- **TypeScript**: Ensures type safety and better developer experience.
- **React Calendar**: For displaying venue availability.

### Dev Dependencies

- **@types/react**: Type definitions for React.
- **@babel/plugin-proposal-private-property-in-object**: Babel plugin for private class properties.

## Contributing

### Contribution Guidelines

1. **Fork the repository.**
2. **Create a feature branch.**
3. **Commit your changes.**
4. **Push to your branch.**
5. **Submit a pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

