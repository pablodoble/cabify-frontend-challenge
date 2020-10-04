[![Actions Status](https://github.com/pablodoble/cabify-frontend-challenge/workflows/tests/badge.svg)](https://github.com/pablodoble/cabify-frontend-challenge/actions)

# Shopping cart frontend challenge

In this repo you'll be able to find the code for my solution to Cabify's frontend challenge. The following sections will give you an overall view on how it's done and how to run it.

## Strucrture

- Overall
  - Features folder structure
  - Unit tests (react-testing-library)
- Logic:
  - Redux (redux-toolkit)
  - Ducks
  - Checkout class
  - Descriptors: products and discounts (enhanced descriptor)
- Components:
  - Atomic design
  - Styled components
  - Theme
  - Storybook

## Future considerations/improvements

- Using [react-theme-provider](https://github.com/callstack/react-theme-provider) or similar to inject the `theme` object instead of importing it direclty
- Using [react-app-rewired](https://github.com/timarney/react-app-rewired) to avoid using annoying relative urls on imports ("../../../../")
- Using [redux-saga](https://redux-saga.js.org/) to implement asynchronous behaviour when needed.
- Responsive design
- Static types (Flow, Typescript)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run test:coverage`

Launches the test runner in single run mode and returns a code coverage report.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
