import React from "react";
const MALE = "male";
const FEMALE = "female";
const OTHER = "other";
export class FormClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      message: "",
      select: "",
      subscribe: false,
      gender: FEMALE,
      // --------Task---------
      emailTask: "",
      checkTask: false,
      validation: {
        emailTask: false
      }
    };
    this.firstNameRef = React.createRef(); // for focus()
    this.emailRef = React.createRef(); // for focus()

    this.cardRef = React.createRef(); // uncontrollable input
    this.telRef = React.createRef(); // uncontrollable input
  }
  handleInputs = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        if (this.state.firstName.length === 16) {
          // for bank card
          this.emailRef.current.focus();
        }
      }
    );
  };
  handleCheckBox = (event) => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };
  // --------------
  validateName = () => {
    if (this.state.firstName.length < 5) {
    }
  };
  validateEmail = () => {
    if (!validateEmail(this.state.email)) {
      alert("incorrect email");
    }
  };
  handleAndValidateEmailTask = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (!validateEmail(event.target.value)) {
      const validationQ = { ...this.state.validation };
      validationQ.emailTask = false;
      this.setState({
        validation: validationQ
      });
    } else {
      const validationQ = { ...this.state.validation };
      validationQ.emailTask = true;
      this.setState({
        validation: validationQ
      });
    }
  };
  // --------------
  componentDidMount() {
    this.firstNameRef.current.focus();
  }
  render() {
    return (
      <div>
        {/* INPUT */}
        <div>
          <input
            name={"firstName"}
            placeholder={"card"}
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputs}
            onBlur={this.validateName}
            ref={this.firstNameRef}
          />
          <br />
          <input
            name={"email"}
            placeholder={"email"}
            type="email"
            value={this.state.email}
            onChange={this.handleInputs}
            onBlur={this.validateEmail}
            ref={this.emailRef}
          />
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={this.state.textarea}
            onChange={this.handleInputs}
          ></textarea>
        </div>
        {/* SELECT */}
        <select
          name="select"
          id="select"
          value={this.state.select}
          onChange={this.handleInputs}
        >
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {/* CHECKBOX - RADIO */}
        <div>
          <input
            type="checkbox"
            name="subscribe"
            checked={this.state.subscribe}
            onChange={this.handleCheckBox}
          />{" "}
          Subscribe?
          <br />
          <input
            type="radio"
            name="gender"
            value={MALE}
            checked={this.state.gender === MALE} // controllable input
            onChange={this.handleInputs}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value={FEMALE}
            checked={this.state.gender === FEMALE}
            onChange={this.handleInputs}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value={OTHER}
            checked={this.state.gender === OTHER}
            onChange={this.handleInputs}
          />{" "}
          Other
        </div>
        <hr />
        {/* NEPOM TASK MAKE FORM; 31 Lesson; [Udemy] React с нуля для начинающих 3 проекта в портфолио (2020)*/}
        <div>
          <form
            style={{
              width: "500px",
              margin: "0 auto",
              padding: "5px",
              border: "1px solid #ccc"
            }}
            onSubmit={this.validateForm}
          >
            <input
              type="email"
              name="emailTask"
              value={this.state.emailTask}
              onChange={this.handleAndValidateEmailTask}
            />{" "}
            Email
            <br />
            <input
              type="checkbox"
              name="checkTask"
              id="checkTask"
              onChange={this.handleCheckBox}
            />{" "}
            I agree with terms and conditions
            <br />
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                disabled={
                  !(this.state.validation.emailTask && this.state.checkTask)
                }
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <hr />
        <form onSubmit={this.formCardSubmit}>
          <input
            name={"card"}
            placeholder={"card"}
            type="text"
            ref={this.cardRef}
          />
          <input
            name={"tel"}
            placeholder={"tel"}
            type="tel"
            ref={this.telRef}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
  // --------------
  formCardSubmit = (e) => {
    e.preventDefault();
    if (this.cardRef.current.value.length < 16) {
      alert("this.cardRef.current.value.length < 16");
      return;
    }
    if (this.telRef.current.value.length < 11) {
      alert("this.telRef.current.value.length < 11");
      return;
    }
    this.cardRef.current.value = "";
    this.telRef.current.value = "";
    alert("data sent");
  };
  validateForm = (event) => {
    event.preventDefault();
    if (!validateEmail(this.state.emailTask)) {
      alert("incorrect email");
      return;
    }
    if (this.state.checkTask === false) {
      alert("give permission check");
      return;
    }
    alert("Thanks for sub");
  };
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
