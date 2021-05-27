import React from "react"
import PropTypes from "prop-types"
import defaultImage from "./enot07.png"

const Painting = ({url, title, profileUrl, tag, price, quantity}) => (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{tag}</a>
      </p>
        <p>Price: {price} Euro</p>
        <p>Verfügbarkeit: {quantity < 10 ? 'Leer' : 'Verfügbar'}</p>
      <button type="button">add korb</button>
    </div>
)

Painting.defaultProps = {
  url: defaultImage,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;