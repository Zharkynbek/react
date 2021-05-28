import React from "react"
import PropTypes from "prop-types"

const Panel = ({ title, children }) => (
  <div>
        {title && <h2>{ title}</h2>}
    {children}
  </div>
);

Panel.defaultProps = {
    title: ''
}

Panel.propTypes = {
    title: PropTypes.string
}
export default Panel;