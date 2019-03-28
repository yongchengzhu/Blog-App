# Blog App

A simple blog built with React and Redux.



## Project Timeline

[Initial Setup](#initial-setup)

[Route Setup](#route-setup)

[Landing Page](#landing-page)

[Header](#header)

[Authentication](#Authentication)



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

### Authentication

1. Create new project `https://console.developers.google.com/`

   After project is generated, fill in the 'Application name' in the 'OAuth consent screen' tab and save.

   Next, create credentials to obtain 'Client ID'. (Under section "Restrictions > Authorized JavaScript origins" make sure to fill in `http://localhost:3000`.)

2. Add the Google API library to `public/index.html` within the 'header' tags.

   `<script src="https://apis.google.com/js/api.js"></script>`

3. Create GoogleAuth component in the path `src/components/auths/GoogleAuth.js`.

   ```jsx
   import React from 'react';
   
   class GoogleAuth extends React.Component {
     render() {
       return (
         <div>
           Google Auth
         </div>
       );
     }
   }
   
   export default GoogleAuth;
   ```

   Connect GoogleAuth to Header.

   ```jsx
   import GoogleAuth from './auths/GoogleAuth';
   
   class Header extends React.Component {
     render() {
       return (
         <div style={{ marginBottom: '25px' }}>
           <span>Home</span>
           <span style={{ float: 'right' }}><GoogleAuth /></span>
         </div>
       );
     }
   }
   ```

4. Inside GoogleAuth, load the internal library *auth2* and then initialize this library with our Client ID.

   ```jsx
   class GoogleAuth extends React.Component {
     componentDidMount() {
       window.gapi.load('client:auth2', () => {
         window.gapi.client.init({
           clientId: '82086056139-6clg96b95h7ejbnc7vhag9cpbankna7o.apps.googleusercontent.com',
           scope: 'email'
         })
       });
     }
   }
   ```

   At this point we can open our chrome console and do some debugging. First, assign an instance of the GoogleAuth object to a variable.

   ```javascript
   const auth = gapi.auth2.getAuthInstance();
   ```

   If we print out this object, notice there are three useful functions that we want to use: signIn(), signOut(), and isSignedIn.get().

   Try to sign in our Google account.

   `auth.signIn()`

   Check if we are signed in.

   `auth.isSignedIn.get()`

   Finally, sign out.

   `auth.signOut()`