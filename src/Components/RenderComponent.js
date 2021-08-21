import React from "react";
class RenderComponent extends React.Component {
  displayData(i) {
    const [count, name, age] = i;
    return (
      <div className="component-item" key={count}>
        Name: {name}. Age: {age}
      </div>
    );
  }
  render() {
    const data = this.props.data;
    return (
      <div className="component-wrapper">
        {data.map((i) => this.displayData(i))}
      </div>
    );
  }
}

export default RenderComponent;
