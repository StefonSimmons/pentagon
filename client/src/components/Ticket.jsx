import React, { Component } from 'react'
import styled from 'styled-components'
import { getQR } from '../services/api-helper'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0
`
const SVG = styled.svg`
  align-self: flex-start
`
const Header = styled.h1`
  font-family: Lato;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 2px;

  color: #000000;
`
const Divider = styled.hr`
  border: 1px solid #000000;
  width: 80%;
  margin: 40px auto 0 auto
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%
`
const Label = styled.label`
  font-family: Lato;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  margin-top: 20px;
  align-self: left
`
const Detail = styled.p`
  margin: 0px;
  font-family: Lato;
  font-weight: normal;
  font-size: 18px;
  margin-top: 5px
`
const Button = styled.button`
  height: 45px;
  width: 286px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #FF0000;
  border: 1px solid #FF0000;
  color: #ffffff;
  font-family: Lato;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px
`
const QRCode = styled.div`
  width: 300px;
  height: 300px;
  background-size: cover;  
`

export default class Ticket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qr: null
    };
  }
  componentDidMount() {
    this.readQR(this.props.match.params.id)
  }

  readQR = async (ticketId) => {
    const qr = await getQR(ticketId)
    this.setState({ qr })
  }

  render() {
    const { id } = this.props.match.params;
    const { qr } = this.state
    const { allTickets, currentUser } = this.props

    const ticket = allTickets.map((t, idx) => {
      if (t.id === currentUser.id && t.ticket_id === parseInt(id)) {
        return (
          <React.Fragment key={idx}>
            <Header>GENERAL ADMISSION</Header>
            <h2>#{t.ticket_id}</h2>
            <h3>{t.date}</h3>
            <h3>{t.start_time}</h3>
            <QRCode style={{ backgroundImage: `url(data:image/svg+xml;base64,${btoa(qr)})` }}>
            </QRCode>
            <Divider />
            <Wrapper>
              <Label>Where:</Label>
              <Detail>{t.location}</Detail>
              {/* <Label>Seat:</Label> 
          <Detail>gfgg</Detail> */}
            </Wrapper>
            <Divider />
            <Button>ADD TO APPLE WALLET</Button>
            <Button>TEXT ME THE TICKET</Button>
          </React.Fragment>
        )
      }
    })

    return (
      <>
        <Main>
          <SVG onClick={() => { this.props.history.goBack() }} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.0499 31.6667C22.801 31.6676 22.5549 31.6126 22.33 31.5059C22.105 31.3992 21.9068 31.2434 21.7499 31.0501L13.6999 21.0501C13.4548 20.7518 13.3208 20.3778 13.3208 19.9917C13.3208 19.6057 13.4548 19.2316 13.6999 18.9334L22.0333 8.93339C22.3162 8.59302 22.7227 8.37898 23.1634 8.33835C23.6041 8.29772 24.0429 8.43382 24.3833 8.71672C24.7236 8.99962 24.9377 9.40614 24.9783 9.84685C25.0189 10.2876 24.8828 10.7264 24.5999 11.0667L17.1499 20.0001L24.3499 28.9334C24.5538 29.178 24.6832 29.4759 24.723 29.7918C24.7628 30.1078 24.7113 30.4285 24.5745 30.716C24.4378 31.0036 24.2215 31.2459 23.9513 31.4144C23.6811 31.5829 23.3683 31.6704 23.0499 31.6667Z" fill="black" />
          </SVG>

          {ticket}
        </Main>
      </>
    )
  }

}

