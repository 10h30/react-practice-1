import React from "react";
import Card from "./Card";
import AgeInput from "./AgeInput";
import NameInput from "./NameInPut";
import RenderComponent from "./RenderComponent";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      count: 0,
      data: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.nameChangeHander = this.nameChangeHander.bind(this);
    this.ageChangeHander = this.ageChangeHander.bind(this);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  submitHandler(event) {
    event.preventDefault();
    //this.state.age < 0 && alert("Age must be larger than 0")
    //this.state.name === "" && alert("Cannot be empty")
    //this.state.age === "" && alert("Cannot be empty")
    //alert("Hello.My name is " + this.state.name + ". I am " + this.state.age + " years old.");
    let data = this.state.data.slice();
    data.push([this.state.count, this.state.name, this.state.age]);
    console.log(data);
    //this.data.push([
    // this.state.count, this.state.name, this.state.age
    //])

    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        name: "",
        age: "",
        data: data
      };
    });
  }

  nameChangeHander(e) {
    this.setState({
      name: e
    });
  }

  ageChangeHander(age) {
    this.setState({
      age: age
    });
    console.log(age);
  }

  render() {
    return (
      <div>
        <Card>
          <form className="form" onSubmit={this.submitHandler}>
            <NameInput
              value={this.state.name}
              onNameChange={this.nameChangeHander}
            />
            <AgeInput
              value={this.state.age}
              onNameChange={this.ageChangeHander}
            />
            <p>
              <button>Submit</button>
            </p>
          </form>
        </Card>
        <RenderComponent data={this.state.data} />
      </div>
    );
  }
}

export default Form;
