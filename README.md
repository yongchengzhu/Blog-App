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

3. Setup the root route for now inside of App.

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

### Landing Page

1. Create the Landing page component `src/components/blogs/Landing.js`

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

2. Inside of App, make the root route show the Landing page.

   ```jsx
   import Landing from './blogs/Landing';
   
   ...
         <Router history={history}>
           <Route path="/" component={Landing} />
         </Router>
   ...
   ```

### **Header**

1. Create the Header component inside `src\components\Header.js`

   ```jsx
   import React from 'react';
   
   class Header extends React.Component {
     render() {
       return (
         <div style={{ marginBottom: '25px' }}>
           <span>Home</span>
           <span style={{ float: 'right' }}>Sign In</span>
         </div>
       );
     }
   }
   export default Header;
   ```

2. Show the Header component on all routes.

   ```jsx
   import Header from './Header'
   
   ...
         <Router history={history}>
           <Header />
           <Route path="/" component={Landing} />
         </Router>
   ...
   ```

   