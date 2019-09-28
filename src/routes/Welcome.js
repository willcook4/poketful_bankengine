import React from 'react'
import { StyledH1 as H1 } from '../components/text';
import { StyledButton as Button } from '../components/button';
import styled from 'styled-components';
import logo from '../eggbene.jpg';
import pocketfulLogo from '../Pocketful_logo-1.png';

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 40px;
  text-align: center;
  margin-top: 30%;
  #beneLogo {
    width: 60%;
    height: auto;
    margin: auto;
  }
  Button {
    width: 50%;
    height: 50px;
    font-size: 20px;
    margin: 0 auto;
  }
  #pocketfulLogo {
    width: 20%;
    height: auto;
    margin auto;
  }
  p {
    margin-bottom: 5px;
  }
`

export const Welcome = () => {

  const onClickStart = () => {
    const authURL = 'https://auth.bankengine.nz/banks?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dbene%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fyour-budget%26scope%3Duserinfo%2520offline_access%2520accounts%2520balance%2520transactions%2520payments%26nonce%3Dnonce%26state%3Dstate%2527';
    window.location.assign(authURL);
  }

  return (
    <div>
      <Wrapper>
        <div>
          <H1 type='bold'>Kia Ora Danielle</H1>
          <H1 type='bold'>Welcome to</H1>
        </div>
        <img src={logo} id="beneLogo" />
        <Button type='primary' shape='round' onClick={onClickStart}>Get Started</Button>
        <div>
          <p>Powered by</p>
          <img src={pocketfulLogo} id="pocketfulLogo" />
        </div>
      </Wrapper>

    </div>

  )
}