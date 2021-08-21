import React from "react";

class AgeInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    const name = this.props.value;
    return (
      <p>
        <label className="form-label">Name</label>
        <br />
        <input
          type="number"
          placeholder="Age"
          value={name}
          onChange={this.changeHandler}
        />
      </p>
    );
  }
}

export default AgeInput;
