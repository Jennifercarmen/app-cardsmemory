import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <header>
        <div className="title"> Casino </div>
        <div>
          <button className="rebootbutton">
            Reiniciar
          </button>
        </div>
        <div className="title">
          Intentos:
        </div>
      </header>
    );
  }
}

export default Header;
