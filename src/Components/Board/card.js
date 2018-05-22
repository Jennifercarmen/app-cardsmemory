import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexyFlipCard } from 'flexy-flipcards';


class Card extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
        <FlexyFlipCard>
          <div>
            {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/front.PNG`)} alt="card" />}
          </div>
          <div>
            {<img ref='flipper' className="img-fluid" src={require(`../../assets/images/${image}.png`)} alt="card" />}
          </div>
        </FlexyFlipCard>
      </div>
    )
  }
}
Card.propTypes = {
  image: PropTypes.string.isRequired
}

export default Card;