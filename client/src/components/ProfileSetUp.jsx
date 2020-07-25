import React from 'react'
import styled from 'styled-components'

const Divider = styled.hr`
  border: 1px solid #FFFFFF;
  width: 80%;
  margin-top: 20px
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px
`
const Box = styled.div`
  width: 80%;
  height: 193px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 20px;
  border: 2px solid #FFFFFF;
  border-radius: 15px;
  color: #ffffff
`
const Paragraph = styled.p`
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
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
  letter-spacing: 2px
`
const BigButton = styled.button`
  height: 55px;
  width: 149px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #FF0000;
  border: 1px solid #FF0000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px
`
export default function ProfileSetUp({ hideProfile }) {
  return (
    <>
      <Divider />
      <Main>

        <Box>
          <svg width="56" height="45" viewBox="0 0 56 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8 22.5C22.2162 22.5 26.6 18.0967 26.6 12.6562C26.6 7.21582 22.2162 2.8125 16.8 2.8125C11.3837 2.8125 7 7.21582 7 12.6562C7 18.0967 11.3837 22.5 16.8 22.5ZM23.52 25.3125H22.7937C20.9737 26.1914 18.9525 26.7188 16.8 26.7188C14.6475 26.7188 12.635 26.1914 10.8062 25.3125H10.08C4.515 25.3125 0 29.8477 0 35.4375V37.9688C0 40.2979 1.88125 42.1875 4.2 42.1875H29.4C31.7188 42.1875 33.6 40.2979 33.6 37.9688V35.4375C33.6 29.8477 29.085 25.3125 23.52 25.3125ZM42 22.5C46.6375 22.5 50.4 18.7207 50.4 14.0625C50.4 9.4043 46.6375 5.625 42 5.625C37.3625 5.625 33.6 9.4043 33.6 14.0625C33.6 18.7207 37.3625 22.5 42 22.5ZM46.2 25.3125H45.8675C44.6512 25.7344 43.365 26.0156 42 26.0156C40.635 26.0156 39.3487 25.7344 38.1325 25.3125H37.8C36.015 25.3125 34.37 25.8311 32.9262 26.666C35.0612 28.9775 36.4 32.0449 36.4 35.4375V38.8125C36.4 39.0059 36.3562 39.1904 36.3475 39.375H51.8C54.1187 39.375 56 37.4854 56 35.1562C56 29.7158 51.6162 25.3125 46.2 25.3125Z" fill="white" />
          </svg>
          <Paragraph>Invite your friends and family and add them to your list to share and join the event together!</Paragraph>
          <Button>INVITE</Button>
        </Box>

        <Box>
          <svg width="53" height="38" viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.67857 0C2.56482 0 0 2.5745 0 5.7V32.3C0 35.4255 2.56482 38 5.67857 38H47.3214C50.4352 38 53 35.4255 53 32.3V5.7C53 2.5745 50.4352 0 47.3214 0H5.67857ZM5.67857 3.8H47.3214C48.3928 3.8 49.2143 4.6246 49.2143 5.7V32.3C49.2143 33.3754 48.3928 34.2 47.3214 34.2H5.67857C4.60721 34.2 3.78571 33.3754 3.78571 32.3V5.7C3.78571 4.6246 4.60721 3.8 5.67857 3.8ZM17.0357 7.6C12.8714 7.6 9.46429 11.02 9.46429 15.2C9.46429 17.3147 10.3672 19.2223 11.7717 20.6036C10.4833 21.4763 9.42699 22.6521 8.6949 24.0284C7.96281 25.4047 7.57712 26.9398 7.57143 28.5H11.3571C11.3571 25.3308 13.8784 22.8 17.0357 22.8C20.193 22.8 22.7143 25.3308 22.7143 28.5H26.5C26.4943 26.9398 26.1086 25.4047 25.3765 24.0284C24.6444 22.6521 23.5882 21.4763 22.2998 20.6036C23.7043 19.2223 24.6071 17.3166 24.6071 15.2C24.6071 11.02 21.2 7.6 17.0357 7.6ZM30.2857 9.5V13.3H45.4286V9.5H30.2857ZM17.0357 11.4C19.15 11.4 20.8214 13.0777 20.8214 15.2C20.8214 17.3223 19.15 19 17.0357 19C14.9214 19 13.25 17.3223 13.25 15.2C13.25 13.0777 14.9214 11.4 17.0357 11.4ZM30.2857 17.1V20.9H45.4286V17.1H30.2857ZM30.2857 24.7V28.5H39.75V24.7H30.2857Z" fill="white" />
          </svg>
          <Paragraph>Verify your ID with us and
        skip the security process at exclusive events for faster entry</Paragraph>
          <Button onClick={hideProfile}>VERIFY</Button>
        </Box>

        <BigButton>SKIP</BigButton>

      </Main>
    </>
  )
}
