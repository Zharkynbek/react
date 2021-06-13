import React, { Component } from "react"
import {createPortal} from "react-dom"
import "./Modal.scss"


const modalRoot = document.querySelector("#modal-root")
export default class Modal extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
      window.removeEventListener("keydown", this.handleKeyDown);
      window.removeEventListener("click", this.handleBackdropClick);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
          this.props.onClose();
      }
  };
  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}