import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
height: 250px;
width: 300px;
margin: 180px 0;
`;

const ButtonLinkContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const Button = styled.button`
  height: 55px;
  width: 149px;
  margin-bottom: 20px;
  border-radius: 50px;
  background-color: #ff0000;
  // background-color: #737677;
  border: 2px solid #ff0000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

const PromptText = styled.p`
  letter-spacing: 2px;
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  // color: #ffffff;
  
`;

const LogInLink = styled(Link)`
  // color: #ffffff;
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid #000000;
  font-weight: 500;
`;

function Welcome() {
  return (
    <WelcomeWrapper>
      <Image src="https://imgur.com/LexBRXb.png" alt="logo" />
      <ButtonLinkContainer>
        <Link to="/signup">
          <Button>Get Started</Button>
        </Link>

        <PromptText>
          Already have an account? <LogInLink to="/login">Log in</LogInLink>
        </PromptText>
      </ButtonLinkContainer>
    </WelcomeWrapper>
  );
}

export default Welcome;

