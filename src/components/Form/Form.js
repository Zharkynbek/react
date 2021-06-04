import React, { Component } from "react";
import shortId from "shortid";

class Form extends Component {
  state = {
    name: "",
    number: "",
    experience: "junior",
    licence: false,
  };

  nameIdInput = shortId.generate();

  numberIdInput = shortId.generate();

  // ================ oldSchool =======

  // handleNameChange = (e) => {
  //   console.log(e.currentTarget.value);
  //   this.setState({ name: e.currentTarget.value });
  // };

  // handleNumberChange = (e) => {
  //   console.log(e.currentTarget.value);
  //   this.setState({ number: e.currentTarget.value });
  // };

  // =============== modern methode ===========

  handleChange = (e) => {
    // =========== 1 variant =================
    // this.setState({
    //   [e.currentTarget.name]: e.currentTarget.value
    // });

    // ===========2 variant ==================
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = e => {
    console.log(e.target.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameIdInput}>
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameIdInput}
          ></input>
        </label>
        <label htmlFor={this.nameIdInput}>
          Number
          <input
            name="number"
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberIdInput}
          ></input>
        </label>

        <p>Your level:</p>
        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
        </label>
        <br />
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
        </label>
        <br />
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Prinimayu uslovie
        </label>
        <button type="submit" disabled={!this.state.licence}>SEND MESSAGE</button>
      </form>
    );
  }
}

export default Form;
