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