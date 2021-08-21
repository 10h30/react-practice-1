import React from "react";
class NameInput extends React.Component {
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
          type="text"
          placeholder="Name"
          value={name}
          onChange={this.changeHandler}
        />
      </p>
    );
  }
}

export default NameInput;
