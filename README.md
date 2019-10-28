# emerald-api 🏘🏰

### [https://emerald-api-test.herokuapp.com/](https://emerald-api-test.herokuapp.com/)

A React+Redux web app that displays the search results from a provided endpoint of the [Emerald Stay](https://emeraldstay.com/search?) API.

Design highly inspired from Emerald's 

![Alt text](./src/assets/Screengrab01.jpg "Screengrab01")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### **Built with**

- [React](https://reactjs.org/)

- [Redux](https://redux.js.org/)

- [Styled Components 💅](https://www.styled-components.com/)

- [Jest](https://jestjs.io/)

To run the project, you can run this scripts:

`yarn` or `npm install`  to install dependencies

`yarn start` or `npm start` Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

`yarn test` or `npm test` Launches the test runner in the interactive watch mode.

`yarn build` or `npm build` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### **Structure**

    emerald-api/
      README.md
      package.json
      public/
        index.html
        favicon.ico
      src/
        index.js
    		serviceWorkers.js
    		actions/
    			index.js
    		reducers/
    			index.js
    		assets/
    		components/
    			App.js
    			ComingSoon.js
    			Header.js
    			SearchResults.js
    			Listing.js
    			Footer.js
    			/styles
    
    			/test
