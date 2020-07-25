import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  margin-top: 20px;
  background: #EDF3F5;
  border-radius: 15px 0px 0px 0px;
`
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15px 0px 0px 0px;
`
const Tab = styled.button`
  background: #EDF3F5;
  border: 1px solid #EDF3F5;
  padding: 20px 10px;
  width: 125px;
  font-family: Lato;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 2px;
  color: #C6D1D6;  
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px 0px 0px 0px;
  cursor: pointer
`
const TabBox = styled.div`
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100vh;
  margin: 20px auto
`
const Welcome = styled.h1`
  color: #000000;
  font-family: Lato;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
`
const Paragraph = styled.p`
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 2px;
  color: #000000;
  text-align: center;
  width: 90%
`
const BigButton = styled.button`
  height: 55px;
  width: 301px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #FF0000;
  border: 1px solid #FF0000;
  color: #ffffff;
  letter-spacing: 2px;
  font-family: Lato;
  font-weight: 500;
  font-size: 15px;
  color: #FFFFFF;
  padding-left: 15px;
  cursor: pointer;

  &:hover{
    background-color: green;
    border: 1px solid green;
  }
`
const Bold = styled.span`
  font-weight: 900
`

const SmallImg = styled.img`
  width: 132px;
  height: 99px
`
const Images = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px
`
const WhiteSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 201px;
  background: #ffffff;
  border: 1px solid #D1D9DD;
  border-radius: 15px;
`

export default class ID extends Component {

  constructor(props) {
    super(props)

    this.state = {
      frontTab: true,
      backTab: false,
      selfieTab: false
    }
  }

  openTab = (tab) => {
    this.setState({
      frontTab: false,
      backTab: false,
      selfieTab: false
    })
    this.setState(prevState => ({
      [tab]: !prevState[tab]
    }))
  }

  render() {
    const { frontTab, backTab, selfieTab } = this.state
 

    console.log(this.props.currentUser ? this.props.currentUser.first_name : 'loading...')
    return (
      <>
        {this.props.currentUser ?
          <Main>
            {console.log('-->', this.state)}
  
            <TabContainer className="w3-bar">
              <Tab className="w3-bar-item w3-button" style={frontTab ? { boxShadow: 'none', color: '#6D6D6D' } : null} onClick={() => { this.openTab('frontTab') }}>1. FRONT</Tab>
              <Tab className="w3-bar-item w3-button" style={backTab ? { boxShadow: 'none', color: '#6D6D6D' } : null} onClick={() => { this.openTab('backTab') }}>2. BACK</Tab>
              <Tab className="w3-bar-item w3-button" style={selfieTab ? { boxShadow: 'none', color: '#6D6D6D' } : null} onClick={() => { this.openTab('selfieTab') }}>3. SELFIE</Tab>
            </TabContainer>

            <TabBox style={frontTab ? { display: 'flex' } : { display: 'none' }}>
              <img src="https://imgur.com/VlzXJNB.png" alt="img-id" />
              <Welcome>WELCOME {this.props.currentUser.first_name}!</Welcome>
              <Paragraph>Please provide a Photo of the <Bold>Front</Bold> of your Driver’s License</Paragraph>
              <BigButton>
                {/* <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.95455 3.58532H7.63409V11.2732C7.63409 11.3732 7.71591 11.455 7.81591 11.455H9.17955C9.27955 11.455 9.36136 11.3732 9.36136 11.2732V3.58532H11.0455C11.1977 3.58532 11.2818 3.41033 11.1886 3.29216L8.64318 0.0697542C8.62617 0.0480251 8.60444 0.0304518 8.57964 0.0183663C8.55483 0.00628079 8.5276 0 8.5 0C8.4724 0 8.44517 0.00628079 8.42036 0.0183663C8.39556 0.0304518 8.37383 0.0480251 8.35682 0.0697542L5.81136 3.28989C5.71818 3.41033 5.80227 3.58532 5.95455 3.58532ZM16.8182 10.5914H15.4545C15.3545 10.5914 15.2727 10.6733 15.2727 10.7732V14.2729H1.72727V10.7732C1.72727 10.6733 1.64545 10.5914 1.54545 10.5914H0.181818C0.0818182 10.5914 0 10.6733 0 10.7732V15.2728C0 15.675 0.325 16 0.727273 16H16.2727C16.675 16 17 15.675 17 15.2728V10.7732C17 10.6733 16.9182 10.5914 16.8182 10.5914Z" fill="white" />
              </svg> */}
              PHOTO OF FRONT ID
            </BigButton>
              <Paragraph>SCAN PASSPORT INSTEAD?</Paragraph>
            </TabBox>

            <TabBox style={backTab ? { display: 'flex' } : { display: 'none' }}>
              <img src="https://imgur.com/VlzXJNB.png" alt="img-id" />
              <Welcome>WELCOME {this.props.currentUser.first_name}!</Welcome>
              <Paragraph>Please provide a Photo of the <Bold>Back</Bold> of your Driver’s License</Paragraph>
              <BigButton>
                {/* <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.95455 3.58532H7.63409V11.2732C7.63409 11.3732 7.71591 11.455 7.81591 11.455H9.17955C9.27955 11.455 9.36136 11.3732 9.36136 11.2732V3.58532H11.0455C11.1977 3.58532 11.2818 3.41033 11.1886 3.29216L8.64318 0.0697542C8.62617 0.0480251 8.60444 0.0304518 8.57964 0.0183663C8.55483 0.00628079 8.5276 0 8.5 0C8.4724 0 8.44517 0.00628079 8.42036 0.0183663C8.39556 0.0304518 8.37383 0.0480251 8.35682 0.0697542L5.81136 3.28989C5.71818 3.41033 5.80227 3.58532 5.95455 3.58532ZM16.8182 10.5914H15.4545C15.3545 10.5914 15.2727 10.6733 15.2727 10.7732V14.2729H1.72727V10.7732C1.72727 10.6733 1.64545 10.5914 1.54545 10.5914H0.181818C0.0818182 10.5914 0 10.6733 0 10.7732V15.2728C0 15.675 0.325 16 0.727273 16H16.2727C16.675 16 17 15.675 17 15.2728V10.7732C17 10.6733 16.9182 10.5914 16.8182 10.5914Z" fill="white" />
              </svg> */}
              PHOTO OF BACK ID
            </BigButton>
              <Paragraph>SCAN PASSPORT INSTEAD?</Paragraph>
            </TabBox>

            <TabBox style={selfieTab ? { display: 'flex' } : { display: 'none' }}>
              <Welcome>COPY THIS GESTURE</Welcome>
              <Paragraph>Finally, copy the gesture in the photo below. We will match with your ID photo for verification!</Paragraph>
              <Images>
                <WhiteSpace>
                  <SmallImg src="https://imgur.com/VlzXJNB.png" alt="img-id" />
                </WhiteSpace>
                <WhiteSpace>
                  <svg width="47" height="40" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.4062 6.32031H35.1016L33.3613 1.44336C33.2411 1.10964 33.0208 0.821182 32.7305 0.61738C32.4401 0.413578 32.094 0.304375 31.7393 0.304688H15.2607C14.5356 0.304688 13.8857 0.761231 13.644 1.44336L11.8984 6.32031H4.59375C2.21973 6.32031 0.296875 8.24317 0.296875 10.6172V35.1094C0.296875 37.4834 2.21973 39.4062 4.59375 39.4062H42.4062C44.7803 39.4062 46.7031 37.4834 46.7031 35.1094V10.6172C46.7031 8.24317 44.7803 6.32031 42.4062 6.32031ZM42.8359 35.1094C42.8359 35.3457 42.6426 35.5391 42.4062 35.5391H4.59375C4.35742 35.5391 4.16406 35.3457 4.16406 35.1094V10.6172C4.16406 10.3809 4.35742 10.1875 4.59375 10.1875H14.6216L15.54 7.62012L16.77 4.17188H30.2246L31.4546 7.62012L32.373 10.1875H42.4062C42.6426 10.1875 42.8359 10.3809 42.8359 10.6172V35.1094ZM23.5 13.625C18.752 13.625 14.9062 17.4707 14.9062 22.2188C14.9062 26.9668 18.752 30.8125 23.5 30.8125C28.248 30.8125 32.0938 26.9668 32.0938 22.2188C32.0938 17.4707 28.248 13.625 23.5 13.625ZM23.5 27.375C20.6533 27.375 18.3438 25.0654 18.3438 22.2188C18.3438 19.3721 20.6533 17.0625 23.5 17.0625C26.3467 17.0625 28.6562 19.3721 28.6562 22.2188C28.6562 25.0654 26.3467 27.375 23.5 27.375Z" fill="#999999" />
                  </svg>
                </WhiteSpace>
              </Images>
              <BigButton onClick={this.props.showCongratsModal}>SUBMIT</BigButton>
              <Paragraph>RETAKE</Paragraph>
            </TabBox>

          </Main>
          :
          "Loading..."
        }
      </>
    )
  }
}



