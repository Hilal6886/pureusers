import { Component } from "react";
import "./input-box.styles.scss";
class InputBox extends Component {
  render() {
    return (
      <div className="form-group">
      <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          className={`form-control ${this.props.className}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
          id={this.props.id}
        />
      </div>
    );
  }
}
export default InputBox;
