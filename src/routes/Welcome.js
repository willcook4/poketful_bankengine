import React from 'react'
import { Link } from '@reach/router';
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
  return (
    // <nav>
    //   <ul>
    //     <li style={{display: 'block'}}>
    //       {/* <Link to='/welcome'>To Welcome</Link> */}
    //       <span>Welcome</span>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/your-budget'>To Your Budget</Link>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/your-plan'>To Your Plan</Link>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/your-payment'>To Payment</Link>
    //     </li>
    //     <li style={{display: 'block'}}>
    //       <Link to='/authentication'>To Auth</Link>
    //     </li>
    //   </ul>
    // </nav>
    <div>
      <Wrapper>
        <div>
          <H1 type='bold'>Kia Ora Danielle</H1>
          <H1 type='bold'>Welcome to</H1>
        </div>
        <img src={logo} id="beneLogo" />
        <Button type='primary' shape='round'>Get Started</Button>
        <div>
          <p>Powered by</p>
          <img src={pocketfulLogo} id="pocketfulLogo" />
        </div>
      </Wrapper>

    </div>

  )
}