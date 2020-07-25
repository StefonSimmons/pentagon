import React, { Component } from "react";
import { Link } from "react-router-dom";



import styled from "styled-components";



const LogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  height: 150px;
  width: 200px;
  margin: 40px 0;
`;

const LogInFormWrapper = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #ffffff;
  text-align: center;
  border-radius: 50px 0px 0px 0px;
`;

const LogInForm = styled.form``;

const EmailInput = styled.input`
  width: 80%;
  padding: 1.5em;
  margin: 20px 0;
  background-color: #edf3f5;
  border: 2px solid #edf3f5;
  border-radius: 15px;
`;

const PasswordInput = styled.input`
  width: 80%;
  padding: 1.5em;
  background-color: #edf3f5;
  border: 2px solid #edf3f5;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const ForgotPasswordHolder = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 0;
`;

const ForgotPasswordLink = styled(Link)`
  margin-right: 15px;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #000000;
`;

const LogInButton = styled.button`
  height: 55px;
  width: 149px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #FF0000;
  border: 1px solid #FF0000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;

// const AltLogIn = styled.p``;

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <LogInWrapper>

        <Image
          src="https://imgur.com/LexBRXb.png"
          alt="logo"
        />

        <LogInFormWrapper>

          <h2>Welcome</h2>

          <LogInForm
            onSubmit={(e) => {
            e.preventDefault();
            this.props.handleLogin(this.state);
            this.props.history.push('/events');
          }}
          >

            <EmailInput
              id="email"
              type="text"
              name="email"
              placeholder="EMAIL"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <br></br>

            <PasswordInput
              id="password"
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <ForgotPasswordHolder>

              <ForgotPasswordLink to="">
                forgot your password?
              </ForgotPasswordLink>

            </ForgotPasswordHolder>

            <LogInButton
              type="submit"
            >
              LOG IN
              </LogInButton>
            
          </LogInForm>

        </LogInFormWrapper>

      </LogInWrapper>
    );
  }
}

export default LogIn;
