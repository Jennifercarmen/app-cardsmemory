import React, { Component } from 'react';
import Info from './info.js';
import Option from './options.js';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="pt-4">
        <div className="text-center"> Memory Challenge </div>
        <Info />
        <Option />
      </header>
    );
  }
}

export default Header;
