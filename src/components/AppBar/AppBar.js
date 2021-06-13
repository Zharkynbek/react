import React from "react";
import Logo from "../Logo";

const styles = {
  header: {
    minHeight: 80,
    backgroundColor: "palevioletred",
  },
};

const AppBar = () => (
  <header style={styles.header}>
    <Logo text="Logo" />
  </header>
);

export default AppBar;