import React from 'react';
import Info from './info.js';
import Option from './options.js';
import './Header.css';

const Header = () => (
  <div className="pt-4 head">
    <div className="text-center"> Memory Challenge </div>
    <Info />
    <Option />
  </div>
);


export default Header;
