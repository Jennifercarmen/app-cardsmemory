import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image }) => (
  <div className="col-md-3 col-sm-3 col-xl-3 d-flex justify-content-center">
    <div className="card my-2">
      <img className="img-fluid" src={require(`../../assets/images/${image}.png`)} alt="card" />
    </div>
  </div>
)

Card.propTypes = {
  image: PropTypes.string.isRequired
}

export default Card;