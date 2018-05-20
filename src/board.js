import React, { Component } from 'react';
import Carta from './card'
import './board.css'

class board extends Component {
    render() {
        const cartas = [1,2,3,4,5];
        return (
            <div className="board">
                {
                    cartas.map((key,carta)=><Carta/>)
                }
            </div>
        );
    }
}

export default board;