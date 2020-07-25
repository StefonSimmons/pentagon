import React, { Component } from 'react'
import styled from 'styled-components'


const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
const ProfileImg = styled.img`
  width: 119px;
  border-radius: 90px;
  border: 8px solid #000000
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center
`
const ImgInput = styled.input`
  margin-top: 10px;
  border: 2px solid #000000;
  border-radius: 14px;
  height: 30px;
  background: #000000;
  text-align: center;
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 2px; 

  &::placeholder{
    color: #ffffff
  }
`
const Button = styled.button`
  height: 30px;
  width: 100px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #FF0000;
  border: 1px solid #FF0000;
  color: #ffffff;
  font-family: Lato;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer
`

export default class ProfileIdHeader extends Component {


  constructor(props) {
    super(props)

    this.redirect()

    this.state = {
      profile_imgURL: this.props.currentUser.profile_imgURL
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  redirect = () => {
    if (this.props.currentUser === null) {
      this.props.history.push('/signup')
      window.location.reload()
    }
  }

  render() {
    const { profile_imgURL } = this.state

    console.log(profile_imgURL)
    return (
      <>
        {this.props.currentUser ?

          <ImageContainer>
            {profile_imgURL !== null ?
              <>
                <ProfileImg src={profile_imgURL} alt="profile-img" />
              </>
              :
              <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.168 92.0019C94.8876 83.4934 83.2627 74.375 59.4999 74.375C35.7371 74.375 24.1197 83.4859 18.8317 92.0019C23.7038 98.1098 29.8906 103.041 36.9317 106.427C43.9727 109.814 51.6868 111.569 59.4999 111.562C67.3131 111.569 75.0271 109.814 82.0682 106.427C89.1092 103.041 95.296 98.1098 100.168 92.0019Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M59.5 66.9375C65.4176 66.9375 71.0929 64.5867 75.2773 60.4023C79.4617 56.2179 81.8125 50.5426 81.8125 44.625C81.8125 38.7074 79.4617 33.0321 75.2773 28.8477C71.0929 24.6633 65.4176 22.3125 59.5 22.3125C53.5824 22.3125 47.9071 24.6633 43.7227 28.8477C39.5383 33.0321 37.1875 38.7074 37.1875 44.625C37.1875 50.5426 39.5383 56.2179 43.7227 60.4023C47.9071 64.5867 53.5824 66.9375 59.5 66.9375Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M59.5 7.4375C45.6922 7.4375 32.4499 12.9226 22.6863 22.6863C12.9226 32.4499 7.4375 45.6922 7.4375 59.5C7.4375 73.3078 12.9226 86.5501 22.6863 96.3137C32.4499 106.077 45.6922 111.562 59.5 111.562C73.3078 111.562 86.5501 106.077 96.3137 96.3137C106.077 86.5501 111.562 73.3078 111.562 59.5C111.562 45.6922 106.077 32.4499 96.3137 22.6863C86.5501 12.9226 73.3078 7.4375 59.5 7.4375ZM0 59.5C0 43.7196 6.26873 28.5856 17.4271 17.4271C28.5856 6.26873 43.7196 0 59.5 0C75.2804 0 90.4144 6.26873 101.573 17.4271C112.731 28.5856 119 43.7196 119 59.5C119 75.2804 112.731 90.4144 101.573 101.573C90.4144 112.731 75.2804 119 59.5 119C43.7196 119 28.5856 112.731 17.4271 101.573C6.26873 90.4144 0 75.2804 0 59.5Z" fill="white" />
              </svg>
            }
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.props.handleProfileImgUpdate(this.props.currentUser.id, this.state)
                this.setState({
                  profile_imgURL: this.props.currentUser.profile_imgURL
                })
              }}>
              <ImgInput
                type="text"
                name='profile_imgURL'
                value={this.state.profile_imgURL}
                placeholder='image url'
                onChange={this.handleChange}
              />
              <Button type="submit">
                ADD IMAGE
              </Button>
            </Form>
          </ImageContainer>
          :
          "Loading..."
        }

      </>
    )
  }
}

