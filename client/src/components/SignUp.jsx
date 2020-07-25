import React, { Component } from 'react'
import styled from 'styled-components'

const SignUpTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px
`
const SignUpTitle = styled.h1`
  font-size: 35px;
  color: #000000;
  font-family: Lato;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 2px
`
const HeaderTwo = styled.h2`
  font-size: 15px;
  color: #000000;
  font-family: Lato;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 2px
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SocialIcons = styled.div`
  display: flex;
  border: 2px solid #FFFFFF;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  margin: 0 15px 0 15px
`
const Or = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`
const Divider = styled.hr`
  border: 1px solid #000000;
  width: 80%;
  margin: 40px auto 0 auto
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  margin: 5px;
  border-radius: 14px;
  height: 55px;
  background-color: #edf3f5;
  border: 2px solid #edf3f5;
  text-align: center;
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  // color: #ffffff;
  letter-spacing: 2px;

  &::placeholder{
    // color: #ffffff
  }
`
const Button = styled.button`
  height: 55px;
  width: 149px;
  margin-top: 50px;
  border-radius: 50px;
  background-color: #ff0000;
  border: 1px solid #ff0000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  align-self: center
`
class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      mobile_phone: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
        <SignUpTitles>
          <SignUpTitle>SIGN UP</SignUpTitle>
          <HeaderTwo>SIGN UP WITH 1-CLICK</HeaderTwo>
        </SignUpTitles>

        <SocialContainer>
          <SocialIcons>
            <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="57" height="57" rx="16" stroke="black" stroke-width="2" />
              <path d="M25.3397 47V31.0462H21V25.3021H25.3397V20.3959C25.3397 16.5405 27.9032 13 33.81 13C36.2016 13 37.97 13.2229 37.97 13.2229L37.8307 18.5869C37.8307 18.5869 36.0271 18.5698 34.059 18.5698C31.9289 18.5698 31.5877 19.5241 31.5877 21.1078V25.3021H38L37.721 31.0462H31.5877V47H25.3397Z" fill="black" />
            </svg>
          </SocialIcons>
          <Or>OR</Or>
          <SocialIcons>
            <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="57" height="57" rx="16" stroke="black" stroke-width="2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.465 27.7812H30.0892V33.2188H37.9363C37.2229 37.025 33.8344 39.5625 30.0892 39.3812C25.4522 39.2 21.8854 35.575 21.707 30.8625C21.5287 25.9688 25.2739 21.8 30.0892 21.6187C32.051 21.6187 34.0127 22.3438 35.6178 23.7938L39.7197 19.8062C37.2229 17.2687 33.6561 16 30.2675 16C22.4204 16 16 22.525 16 30.5C16 38.475 22.4204 45 30.2675 45C38.4713 45 44 39.2 44 30.8625C43.8217 29.775 43.8217 28.8687 43.465 27.7812Z" fill="black" />
            </svg>
          </SocialIcons>

        </SocialContainer>
        <Divider />
        <FormContainer>
          <HeaderTwo>SIGN UP WITH YOUR EMAIL</HeaderTwo>
          <Form onSubmit={(e) => {
            e.preventDefault();
            this.props.handleRegister(this.state);
            this.props.history.push('/profile_setup');
          }}>
            <div>
              <Input
                type="text"
                name='first_name'
                value={this.state.first_name}
                placeholder='first name'
                onChange={this.handleChange}
              />
              <Input
                type="text"
                name='last_name'
                value={this.state.last_name}
                placeholder='last name'
                onChange={this.handleChange}
              />
            </div>
            <Input
              type="text"
              name='mobile_phone'
              value={this.state.mobile_phone}
              placeholder='mobile number'
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name='email'
              value={this.state.email}
              placeholder='email address'
              onChange={this.handleChange}
            />
            <Input
              type="password"
              name='password'
              value={this.state.password}
              placeholder='password'
              onChange={this.handleChange}
            />
            {/* <Input
              type="text"
              name=''
              value={``}
              placeholder='confirm password'
              // onChange={this.handleChange}
            /> */}
            <Button type="submit">Submit</Button>
          </Form>
        </FormContainer>
      </>
    )
  }
}

export default SignUp