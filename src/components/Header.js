import React from 'react';
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

export default Header;