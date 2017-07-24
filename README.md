# Assignment: React Performance Adjustments

## Introduction
This is a simple assignment that attempts to leverage various tools to improve the performance of a React application.

## Technologies Used
In addition to React/Redux, this application also makes use of the following tools to improve performance.

- Reselect - Used for memoization of selectors. Can be seen in use in GroceryListContainer.js
- Pure Components - Used to reduce re-renders for stylistic components. 
- Script defer is used in the build to help load the DOM earlier while the JavaScript continues to process in the background.


## Getting Started
To set up this project in your local environment, simply install the depencies with `yarn` or `npm install`, then run the project with `yarn start` or `npm start`.