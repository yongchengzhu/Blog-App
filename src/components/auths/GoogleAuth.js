import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '82086056139-6clg96b95h7ejbnc7vhag9cpbankna7o.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }
  
  render() {
    return (
      <div>
        Google Auth
      </div>
    );
  }
}

export default GoogleAuth;