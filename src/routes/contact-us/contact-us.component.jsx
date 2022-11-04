import { Component } from "react";
import "./contact-us.styles.css";
import InputBox from "../../components/input-box/input-box.component";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  render() {
    const onNameChange = (event) => {
      this.setState({ name: event.target.value });
    };
    const onEmailChange = (event) => {
      this.setState({ email: event.target.value });
    };
    const onMessageChange = (event) => {
      this.setState({ message: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("form submitted");
    };
    return (
      <div className="contact-us-container">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          method="POST"
          className="form"
        >
          <InputBox
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={onNameChange}
            id="name"
            label="Name"
          />
          <InputBox
            type="email"
            className="form-control"
            value={this.state.email}
            onChange={onEmailChange}
            id="email"
            label="Email address"
          />
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.message}
              onChange={onMessageChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default ContactUs;
