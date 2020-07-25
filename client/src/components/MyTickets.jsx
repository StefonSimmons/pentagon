import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  height: 91px;
  background: #000000;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: Lato;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #FFFFFF
`
const HeaderTwo = styled.header`
  height: 54px;
  background: #EDF3F5;
  display: flex;
  justify-content: center;
  align-items: center
`
const GreyBox = styled.div`
  height: 33px;
  width: 325px;
  background: #000000;
  border: 2px solid #000000;
  border-radius: 8px;
  display: flex;
  align-items: center;
`
const WhiteOption = styled.button`
  height: 33px;
  width: 159px;
  background: #FFFFFF;
  border: 2px solid #FFFFFF;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-family: Lato;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 2px;
  color: #000000;
`
const GreyOption = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  color: #A7A7A7;
  margin: 0 auto
`
const Main = styled.main`
  background: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
`
const Ticket = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  background: #ffffff 
`
const Image = styled.img`
  height: 88px;
  weight: 106px;
  border-radius: 20px;
`
const Info = styled.div`
  width: 175px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center
`
const EventName = styled.h1`
  margin: 0;
  font-family: Lato;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 2px;
  color: #000000;
  text-transform: uppercase
`
const Date = styled.h2`
  margin-top: 5px;
  font-family: Lato;
  font-weight: 500;
  font-size: 12px; 
  letter-spacing: 2px;
  color: #000000;
`
const Location = styled(Date)`
`
const Button = styled.button`
  height: 30px;
  width: 78px;
  border-radius: 10px;
  background-color: #FF0000;
  border: 1px solid #FF0000;
  color: #ffffff;
  font-family: Lato;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px
`
const ButtonLink = styled(Link)`
  align-self: flex-end;
  margin: 10px 30px;
`
const Divider = styled.hr`
  border: 1px solid #000000;
  width: 80%;
  margin: 5px auto
`

const Foot = styled.footer`
  height: 74px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: #000000
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%
`

export default function MyTickets({ allTickets, currentUser }) {


  const tickets = allTickets.map((t, idx) => {
    if (t.id === currentUser.id) {
      return (
        <>
          {console.log(t, '<->', t.ticket_id)}
          <Ticket key={idx}>
            <Image src={t.img_url} alt={t.event_name} />
            <Info>
              <EventName>{t.event_name}</EventName>
              <Date>{`${t.date} | ${t.start_time}`}</Date>
              <Location>{t.location}</Location>
            </Info>
          </Ticket>
          <ButtonLink to={`/ticket/${t.ticket_id}`}><Button>SELECT</Button></ButtonLink>
          <Divider />
        </>
      )
    }
  })

  return (
    <>
      <Header>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0499 31.6667C22.801 31.6676 22.5549 31.6126 22.33 31.5059C22.105 31.3992 21.9068 31.2434 21.7499 31.0501L13.6999 21.0501C13.4548 20.7518 13.3208 20.3778 13.3208 19.9917C13.3208 19.6057 13.4548 19.2316 13.6999 18.9334L22.0333 8.93339C22.3162 8.59302 22.7227 8.37898 23.1634 8.33835C23.6041 8.29772 24.0429 8.43382 24.3833 8.71672C24.7236 8.99962 24.9377 9.40614 24.9783 9.84685C25.0189 10.2876 24.8828 10.7264 24.5999 11.0667L17.1499 20.0001L24.3499 28.9334C24.5538 29.178 24.6832 29.4759 24.723 29.7918C24.7628 30.1078 24.7113 30.4285 24.5745 30.716C24.4378 31.0036 24.2215 31.2459 23.9513 31.4144C23.6811 31.5829 23.3683 31.6704 23.0499 31.6667Z" fill="white" />
        </svg>
        Read our COVID-19 announcement here
      </Header>
      <HeaderTwo>
        <GreyBox>
          <WhiteOption>Active/Non-Active</WhiteOption>
          <GreyOption>All Tickets</GreyOption>
        </GreyBox>
      </HeaderTwo>
      <Main>
        {tickets}
      </Main>
      <Foot>
        <Bottom>
          <Link to="/events">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.49971 17.4515H2.99974V27.9385C2.99974 29.5909 4.34527 30.9348 5.99981 30.9348H24.0002C25.6547 30.9348 27.0003 29.5909 27.0003 27.9385V17.4515H28.5003C28.7969 17.4514 29.0869 17.3635 29.3335 17.1989C29.5801 17.0343 29.7723 16.8004 29.8858 16.5266C29.9993 16.2529 30.029 15.9518 29.9712 15.6612C29.9133 15.3706 29.7705 15.1037 29.5608 14.8942L16.0605 1.41094C15.9213 1.27169 15.756 1.16122 15.5741 1.08585C15.3921 1.01048 15.197 0.97168 15 0.97168C14.803 0.97168 14.6079 1.01048 14.4259 1.08585C14.244 1.16122 14.0787 1.27169 13.9395 1.41094L0.43919 14.8942C0.229471 15.1037 0.0866584 15.3706 0.0288058 15.6612C-0.0290467 15.9518 0.000658441 16.2529 0.114166 16.5266C0.227673 16.8004 0.419887 17.0343 0.666507 17.1989C0.913127 17.3635 1.20308 17.4514 1.49971 17.4515ZM11.9999 27.9385V20.4478H18.0001V27.9385H11.9999ZM15 4.58849L24.0002 13.5773V20.4478L24.0017 27.9385H21.0001V20.4478C21.0001 18.7953 19.6546 17.4515 18.0001 17.4515H11.9999C10.3454 17.4515 8.99987 18.7953 8.99987 20.4478V27.9385H5.99981V13.5773L15 4.58849Z" fill="white" />
            </svg>
          </Link>
          <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3389 18.362L26.6015 25.6159C26.8568 25.871 27.0001 26.217 27 26.5777C26.9999 26.9384 26.8563 27.2843 26.6008 27.5392C26.3454 27.7942 25.999 27.9374 25.6379 27.9372C25.2767 27.9371 24.9304 27.7937 24.6752 27.5386L17.4125 20.2846C15.2414 21.9642 12.5112 22.7546 9.77742 22.495C7.04359 22.2354 4.51146 20.9454 2.69613 18.8873C0.880803 16.8292 -0.0813541 14.1577 0.00539479 11.4162C0.0921436 8.67473 1.22128 6.06923 3.1631 4.12975C5.10493 2.19027 7.71357 1.06249 10.4584 0.975847C13.2031 0.889203 15.8779 1.8502 17.9384 3.66334C19.999 5.47648 21.2906 8.00556 21.5505 10.7361C21.8104 13.4666 21.0191 16.1935 19.3375 18.362H19.3389ZM10.8005 19.8464C12.9487 19.8464 15.0088 18.9941 16.5278 17.477C18.0468 15.9598 18.9001 13.9022 18.9001 11.7566C18.9001 9.61103 18.0468 7.55334 16.5278 6.0362C15.0088 4.51906 12.9487 3.66673 10.8005 3.66673C8.65235 3.66673 6.59218 4.51906 5.0732 6.0362C3.55423 7.55334 2.70088 9.61103 2.70088 11.7566C2.70088 13.9022 3.55423 15.9598 5.0732 17.477C6.59218 18.9941 8.65235 19.8464 10.8005 19.8464V19.8464Z" fill="white" />
          </svg>
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.9334 12.2284L22.0406 10.7702L17.6183 1.67753C17.4975 1.42857 17.2988 1.22704 17.0534 1.10454C16.4377 0.796313 15.6896 1.05317 15.3818 1.67753L10.9595 10.7702L1.06675 12.2284C0.794009 12.2679 0.544645 12.3983 0.353725 12.5959C0.122914 12.8365 -0.00427391 13.1602 0.000109666 13.4958C0.00449324 13.8315 0.140089 14.1516 0.377103 14.386L7.53464 21.4633L5.84364 31.457C5.80399 31.6894 5.82935 31.9285 5.91686 32.1471C6.00437 32.3657 6.15052 32.5551 6.33874 32.6937C6.52696 32.8324 6.74972 32.9148 6.98176 32.9315C7.21379 32.9483 7.44582 32.8988 7.65153 32.7887L16.5001 28.0704L25.3486 32.7887C25.5902 32.9191 25.8707 32.9625 26.1396 32.9151C26.8175 32.7966 27.2734 32.1446 27.1565 31.457L25.4655 21.4633L32.6231 14.386C32.8179 14.1923 32.9464 13.9394 32.9854 13.6628C33.0906 12.9713 32.6153 12.3311 31.9334 12.2284V12.2284ZM22.4537 20.4675L23.8602 28.7778L16.5001 24.8578L9.13993 28.7817L10.5465 20.4715L4.59292 14.5835L12.822 13.3704L16.5001 5.81092L20.1782 13.3704L28.4072 14.5835L22.4537 20.4675Z" fill="white" />
          </svg>
          <Link to="/mytickets">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33183 19.5751L13.3757 25.6152L24.4693 14.5346L18.4221 8.49792L7.33183 19.5751V19.5751ZM31.4969 11.2842L28.9252 8.71382C28.272 9.07032 27.5207 9.20589 26.7839 9.10025C26.0471 8.99461 25.3644 8.65344 24.838 8.12782C24.3115 7.60219 23.9697 6.92039 23.8637 6.18449C23.7576 5.44859 23.8931 4.69818 24.2498 4.04561L21.678 1.47521C21.3539 1.15422 20.9159 0.974121 20.4594 0.974121C20.0029 0.974121 19.5649 1.15422 19.2408 1.47521L0.501681 20.1922C0.18031 20.516 0 20.9535 0 21.4094C0 21.8654 0.18031 22.3029 0.501681 22.6266L3.07511 25.1936C3.72865 24.8362 4.48059 24.7001 5.21815 24.8056C5.95571 24.9112 6.63913 25.2527 7.16589 25.7791C7.69265 26.3054 8.03437 26.9882 8.13977 27.7249C8.24518 28.4616 8.10861 29.2126 7.75053 29.8653L10.324 32.4323C10.6477 32.7541 11.0859 32.9347 11.5426 32.9347C11.9993 32.9347 12.4375 32.7541 12.7612 32.4323L31.4969 13.7186C31.8191 13.3953 32 12.9576 32 12.5014C32 12.0452 31.8191 11.6076 31.4969 11.2842ZM13.3757 28.3777L4.56607 19.5751L18.4238 5.73542L27.2334 14.5346L13.3757 28.3777Z" fill="white" />
            </svg>
          </Link>
        </Bottom>
      </Foot>
    </>
  )
}
