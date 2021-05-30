import React from "react"
import PropTypes from "prop-types"
import styles from "./Panel.module.css"

// const styles = {
//   container: {
//     width: 600,
//     border: '2px solid red',
//     backgroundColor: 'pink',
//   }
// }

const Panel = ({ title, children }) => (
  <div
    className={styles.container}
    // style={styles.container}
  >
    {title && <h2>{title}</h2>}
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