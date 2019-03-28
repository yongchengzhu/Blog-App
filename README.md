# Blog App

A simple blog built with React and Redux.



## Project Timeline

### Initial Setup

1. Create the project.

   `create-react-app blog-app`

2. Delete all the files inside `src`.

3. Create `src/index.js` and `src/components/App.js` with boilerplate codes.

### Route Setup

1. Install react-router.

   `npm install --save react-router-dom`

2. Create our own history object in the following path `src/history.js`.

   ```jsx
   import { createBrowserHistory } from 'history';
   
   export default createBrowserHistory();
   ```

3. Setup Landing page route.

   First create the Landing page component `src/components/blogs/Landing.js`.

   ```jsx
   import React from 'react';
   
   class Landing extends React.Component {
     render() {
       return (
         <div>Landing Page</div>
       );
     }
   }
   
   export default Landing;
   ```

   Next, create a route for the Landing page inside of App.

   ```jsx
   import { Router, Route } from 'react-router-dom';
   import history from '../history';
   import Landing from './blogs/Landing';
   
   class App extends React.Component {
     render() {
       return (
         <Router history={history}>
           <Route path="/" />
         </Router>
       );
     }
   }
   ```

   