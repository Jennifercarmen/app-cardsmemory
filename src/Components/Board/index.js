import React from 'react';
import Card from './card';
import './board.css';
import PropTypes from 'prop-types';

// Aplicando destructuring
const Board = ({ board }) => (
  <div className="board py-1 px-2 ">
    <div className="container">
      <div className="row d-flex justify-content-center">
        {
          board.map((card, index) => (
            <Card key={index} image={card.image} />))
        }
      </div>
    </div>
  </div>
)

Board.propTypes = {
  board: PropTypes.array.isRequired
}

export default Board;