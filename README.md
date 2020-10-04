[![Actions Status](https://github.com/pablodoble/cabify-frontend-challenge/workflows/tests/badge.svg)](https://github.com/pablodoble/cabify-frontend-challenge/actions)

# Shopping cart frontend challenge

In this repo you'll find the code for my solution to Cabify's frontend challenge. The following sections will give you an overall view on how it's done and how to run it.

## Strucrture

Here you have some comments on the structure of the project divided in 3 subsections: Overall, Logic and Components.

### Overall

- This project has been generated using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
- The project follows a [features frolder structure](https://en.reactjs.org/docs/faq-structure.html)
- The code is unit-tested using [react-testing-library](https://testing-library.com/docs/react-testing-library/intro). You can see the code coverage report by running `yarn run test:coverage` as explained in the **Available Scripts** section
  - A `tests` badge has been enabled in this repo to check UT status.

### Logic

- [Redux](https://es.redux.js.org/) has been chosen as the main state manager for the app data along with [redux-toolkit](https://redux-toolkit.js.org/), which is the official tool for using redux.
  - The reducers follow a [Ducks](https://github.com/erikras/ducks-modular-redux) pattern, which is also the recommended way by the redux team and most of the community.
  - You can find the app reducers in `src/features/shoppingCart/state`
- As required for the challenge, all the logic related to products (totals, discounts, etc.) is performed by the **Checkout** class
  - You can find the **Checkout** class in `src/features/shoppingCart/logic`
- To make Checkout logic a bit more scalable, a **descriptor** pattern has been applied on products and discounts data.
  - This means, **Checkout** class is _data-agnostic_. It just takes `products` and `discounts` descriptors in the constructor and uses the props inside them to run all the logic.
  - In addition, `discounts` descriptors are _enhanced_ descriptors. Ideally, descriptors would come from a server, which means all the data inside them must be **serializable**. This means we can't get functions into them. So we have enhanced `discounts` descriptors by adding some functions (`getDescription` and `getDiscountValue`) already in the client side.
  - You can find the descriptors in `src/features/shoppingCart/descriptors`

### Components

- For structuring components, I've chosen [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/), which is a methodology for creating design systems.
  - You can find all the components in `src/features/shoppingCart/components`
- For styles, I've used [Styled components](https://styled-components.com/), which fits very well with almost every component-based application.
- Along with styled components, I've used a `theme` object to store all the main props related with styles (colors, font sizes, etc.)
  - You can find it at `src/styles`
- For exctracting some logic/data parsing out of components, I've written a [Custom hook](https://reactjs.org/docs/hooks-custom.html).
  - You can find it at `src/features/shoppingCart/hooks`
- As a documentation tool, I've used [Storybook](https://storybook.js.org/), which also helps to build standalone components with no need of using a real app. You can run Storybook by using `yarn storybook` command.

## Future considerations/improvements

- Using [react-theme-provider](https://github.com/callstack/react-theme-provider) or similar to inject the `theme` object instead of importing it direclty
- Using [react-app-rewired](https://github.com/timarney/react-app-rewired) to avoid using annoying relative urls on imports ("../../../../")
- Using [redux-saga](https://redux-saga.js.org/) to implement asynchronous behaviour when needed.
- Responsive design
- Static types (Flow, Typescript)

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all the project dependencies. You must run this one before anything else.

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

### `yarn storybook`

Runs Storybook tool. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
