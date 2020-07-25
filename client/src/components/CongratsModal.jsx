import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CongratsBox = styled.div`
  width: 301px;
  height: 390px;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`
const Congrats = styled.h1`
  margin-top: 20px;
  font-family: Lato;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 2px;
  color: #000000;
`
const Words = styled.p`
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  color: #000000;
  width: 80%
`
const BrowseLink = styled(Link)`
  cursor: pointer
`
const BrowseBtn = styled.button`
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
  cursor: pointer

  &:hover{
    background-color: green;
    border: 1px solid green;
  }
`

export default function CongratsModal({ congrats, hideCongratsModal }) {
  return (
    <>
      <div className="w3-modal" style={congrats ? { display: "block" } : { display: "none" }}>
        <CongratsBox className="w3-modal-content">
          <span className="w3-button w3-large w3-round w3-hover-red w3-display-topright" onClick={hideCongratsModal}>&times;</span>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55 0C24.6053 0 0 24.6053 0 55C0 85.3947 24.6053 110 55 110C85.3947 110 110 85.3947 110 55C110 24.6053 85.3947 0 55 0ZM55 104.211C27.7895 104.211 5.78947 82.2105 5.78947 55C5.78947 27.7895 27.7895 5.78947 55 5.78947C82.2105 5.78947 104.211 27.7895 104.211 55C104.211 82.2105 82.2105 104.211 55 104.211ZM88.1447 36.3289C86.9868 35.1711 85.25 35.1711 84.0921 36.3289L47.1842 73.3816L31.6974 57.8947C30.5395 56.7368 28.6579 56.7368 27.6447 57.8947C26.4868 59.0526 26.4868 60.9342 27.6447 61.9474L45.1579 79.4605C45.7368 80.0395 46.4605 80.3289 47.1842 80.3289C47.9079 80.3289 48.6316 80.0395 49.2105 79.4605L88.1447 40.3816C89.3026 39.2237 89.3026 37.4868 88.1447 36.3289Z" fill="black" />
          </svg>
          <Congrats>CONGRATULATIONS!</Congrats>
          <Words>You are now a verified member! Ready to explore nearby events?</Words>
          <BrowseLink to='/events'>
            <BrowseBtn onClick={hideCongratsModal}>Browse</BrowseBtn>
          </BrowseLink>
        </CongratsBox>
      </div>

    </>
  )
}
