import {Component} from 'react'

import './index.css'

const bgColors = ['red', 'des-color']

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: '',
    isLastNameEmpty: '',
    isFormFilling: true,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = event => {
    console.log(event.target.value)
    if (event.target.value === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({firstName: event.target.value})
      this.setState({isFirstNameEmpty: false})
    }
  }

  onBlurLastName = event => {
    console.log(event.target.value)
    if (event.target.value === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({lastName: event.target.value})
      this.setState({isLastNameEmpty: false})
    }
  }

  onFormSubmit = event => {
    event.preventDefault()
    console.log(event.target)
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({firstName: ''})
      this.setState({isFirstNameEmpty: false})
    }
    if (lastName === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({lastName: ''})
      this.setState({isLastNameEmpty: false})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({isFormFilling: false})
    }
  }

  onBackBtn = () => {
    this.setState({isFormFilling: true})
  }

  render() {
    const {
      firstName,
      lastName,
      isFirstNameEmpty,
      isLastNameEmpty,
      isFormFilling,
    } = this.state
    const borderColor1 = isFirstNameEmpty && bgColors[0]
    const borderColor2 = isLastNameEmpty && bgColors[0]
    return (
      <div className="main-cont">
        <h1 className="main-heading">Registration</h1>
        {isFormFilling ? (
          <form className="form" onSubmit={this.onFormSubmit}>
            <label className="label-text" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              className={`first-input ${borderColor1}`}
              id="firstName"
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {isFirstNameEmpty && <p className="des-color">Required</p>}

            <label className="label-text" htmlFor="lastName">
              LAST NAME
            </label>
            <input
              className={`first-input ${borderColor2}`}
              id="lastName"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            {isLastNameEmpty && <p className="des-color">Required</p>}
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="Success-card">
            <img
              className="success-img"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              className="submit-btn"
              type="button"
              onClick={this.onBackBtn}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
