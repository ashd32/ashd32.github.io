import React, { Component } from 'react';
import '../../assets/styles/Contact.css';
import axios from 'axios';
import { isEmail, isName, isEmpty } from './FormValidation';
import Header from "../Header";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      success: '',
      errors: '',
      isEmail: false,
      isName: false,
      isMessage: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: '',
      success: '',
      isEmail: false,
      isName: false,
      isMessage: false
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    // eslint-disable-next-line
    isEmail(email) && name.length < 100
      ? null
      : this.setState({
          isEmail: true
        });
    // eslint-disable-next-line
    isName(name) && name.length < 100
      ? null
      : this.setState({
          isName: true
        });
    if (isEmpty(message) || message.length > 1000) {
      this.setState({
        isMessage: true
      });
      return;
    }

    await axios({
      method: 'post',
      url: 'https://i5etoip6w0.execute-api.us-west-2.amazonaws.com/prod',
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            success: 'Thank you! Your message has been sent successfully',
            name: '',
            email: '',
            message: ''
          });
        }
      })
      .catch(err => {
        const status = JSON.stringify(err.response.status);
        if (status === '402') {
          this.setState({
            errors: 'Please complete the form before sending.'
          });
        } else {
          this.setState({
            errors: 'Uh-oh, something went wrong. Please try again.',
            name: '',
            email: '',
            message: ''
          });
        }
      });
  }
  render() {
    const {
      name,
      email,
      message,
      errors,
      success,
      isEmail,
      isName,
      isMessage
    } = this.state;

    return (
      <div className="contact-main">
        <scroll-page id="landing" className="landing-item top">
          <Header />
        </scroll-page>
      </div>
    );
  }
}

export default Contact;
