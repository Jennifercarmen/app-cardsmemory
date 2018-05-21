import React, { Component } from 'react';
import Card from './card';
import './board.css';

class Board extends Component {
    render() {
        return (
            <div class="Board py-1 px-2 ">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center"><Card /></div>
                        <div class="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center"><Card /></div>
                        <div class="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center"><Card /></div>
                        <div class="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center"><Card /></div>
                        <div class="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center"><Card /></div>
                        <div class="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center"><Card /></div>
                        <div class="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center"><Card /></div>
                        <div class="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center"><Card /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;