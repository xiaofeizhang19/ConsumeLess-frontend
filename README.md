[![CircleCI](https://circleci.com/gh/xiaofeizhang19/ConsumeLess-frontend.svg?style=svg)](https://circleci.com/gh/xiaofeizhang19/ConsumeLess-frontend)

## Introduction

This is a web application that aims to encourage reuse of little used items in order to reduce consumption and help our users to reduce their carbon footprint. Items added will appear on the map based on the owner's post code, allowing users to browse items and borrow those close to their own location. Users can manage the items they own, borrowed and lent out in their profile page.<br />

The [backend](https://github.com/xiaofeizhang19/ConsumeLess-backend) has been built in Python and Flask, and the frontend has been built in React.<br />

The project has been deployed on [heroku](https://infinite-waters-48339.herokuapp.com/).

Login page:
![Login](/public/login.png)

Register page:
![Register](/public/register.png)

Main page:
![Main](/public/main.png)

User profile:
![Profile](/public/profile.png)

## Running Cypress Tests
OPen up cypress console for running the tests by typing `./node_modules/.bin/cypress open` in the console.

## JEST coverage
run the following code:
```
npm t -- --coverage --watchAll=false
```
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload after modification.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
