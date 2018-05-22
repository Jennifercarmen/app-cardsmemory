import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';

class Card extends Component {
    render() {
        return (
            <div className="Board py-1 px-2 ">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
                            <FlexyFlipCard>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
                                </div>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/2.png`)} alt="card" />}
                                </div>
                            </FlexyFlipCard>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
                            <FlexyFlipCard>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
                                </div>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/2.png`)} alt="card" />}
                                </div>
                            </FlexyFlipCard>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
                            <FlexyFlipCard>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
                                </div>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/2.png`)} alt="card" />}
                                </div>
                            </FlexyFlipCard>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
                            <FlexyFlipCard>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
                                </div>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/2.png`)} alt="card" />}
                                </div>
                            </FlexyFlipCard>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
                            <FlexyFlipCard>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
                                </div>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/2.png`)} alt="card" />}
                                </div>
                            </FlexyFlipCard>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
                            <FlexyFlipCard>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
                                </div>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/2.png`)} alt="card" />}
                                </div>
                            </FlexyFlipCard>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
                            <FlexyFlipCard>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
                                </div>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/2.png`)} alt="card" />}
                                </div>
                            </FlexyFlipCard>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
                            <FlexyFlipCard>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
                                </div>
                                <div>
                                    {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/2.png`)} alt="card" />}
                                </div>
                            </FlexyFlipCard>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
export default Card;
