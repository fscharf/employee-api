# Simple Node.js API with TypeScript

This project is a simple Node.js API built with TypeScript and Express, featuring CRUD operations, Prettier and ESLint integration, and automatic restarts with nodemon.

## Project Structure

- `src/`: Contains the source code.
  - `routes/`: Contains route files.
  - `index.ts`: Main entry point of the application.
- Configuration files for ESLint, Prettier, `tsconfig.json`, and `nodemon.json`.
- `package.json`: Manages dependencies and scripts.

Getting Started

## Prerequisites

- Node.js (v12.x or later)
- yarn

## Installation

1. Clone the repository and navigate to the project directory:

```
git clone https://github.com/fscharf/employee-api.git
cd employee-api
```

2. Install dependencies:

```
yarn install
```

## Configuration

1. TypeScript Configuration:

The `tsconfig.json` file is set up to compile TypeScript to JavaScript.

2. Prettier and ESLint Configuration:

`.eslintrc` configures ESLint for TypeScript and integrates Prettier.
`.prettierrc` sets up Prettier formatting rules.

3. Nodemon Configuration:

`nodemon.json` configures nodemon to watch TypeScript files and restart the server on changes.

## Scripts

- Start the server:

```
npm start
# or
yarn start
```

- Start the server with auto-restart:

```
npm run dev
# or
yarn dev
```

- Lint the code:

```
npm run lint
# or
yarn lint
```

- Format the code:

```
npm run format
# or
yarn format
```

## API Endpoints

- Get all activities: `GET /api/activities`
- Get a single activity by ID: `GET /api/activities/:id`
- Get all bulletins: `GET /api/bulletins`
- Get a single bulletin by ID: `GET /api/bulletins/:id`
- Get all employees: `GET /api/employees`
- Get a single employee by ID: `GET /api/employees/:id`

## Description

- `src/index.ts`: Main entry point of the application, sets up the Express server and routes.
- `src/routes/items.ts`: Defines the CRUD routes for handling items in an in-memory array.

## License

This project is licensed under the MIT License.
