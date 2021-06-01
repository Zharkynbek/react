import React, {Component} from "react"
import "./DropDown.css"
import Enot from "./enot07.png"

console.log(Enot);

class DropDown extends Component {
    state = {
        visible: false
    }

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

  render() {
      const {visible} = this.state
        return (
          <div className="DropDown">
            <button
              type="button"
              className="DropDown__toggle"
              onClick={this.toggle}
            >
              {visible ? "hide" : "Click here"}
            </button>
            {visible && (
              <div className="DropDown__menu">
                <img src={Enot} alt="enot" width="480" />
                <p>TADAAAAAM</p>
              </div>
            )}
          </div>
        );
    }
}
export default DropDown;
