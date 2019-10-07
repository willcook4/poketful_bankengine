import React from "react";
import styled from "styled-components";
import { Messaging } from "../components/messagingModal";
import { Ribbon } from '../components/Ribbon'
import { StyledButton as Button } from "../components/button";
import { Link } from '@reach/router'

import logo from "../girl.png";
import pocketfulLogo from "../Pocketful_logo-1.png";

const Wrapper = styled("div")`
  font-family: "Poppins", sans-serif;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  
  .pageContent {
    background-color: #e9edf2;
    padding-top: 50px;
    padding-bottom: 70px;
    display: grid;
    height: 100%;
    grid-template-columns: auto;
    grid-row-gap: 30px;
    text-align: center;
    max-width: 430px;
    max-height: 830px;
    min-height: 650px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .textbox {
    width: 100%;
    padding: 10px;
  }

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

  .bold {
    font-weight: bold;
  }
`;


export const Welcome = () => {
  return (
    <Wrapper>
      <div className="pageContent">
        <div className="textbox">
          <h2>Kia Ora <span className='bold'>Danielle!</span></h2>
          <h2>
            I'm Bennie, and I'm here to help you manage your money each week.
          </h2>
        </div>
        
        <img src={logo} id="beneLogo" alt="bennie logo" />

        <Link to='/choose-bank'>
          <Button type="primary" shape="round">Let's Go!</Button>
        </Link>
        <div>
          <p>Powered by</p>
          <a href="https://pocketful.co.nz/" target="_blank" rel="noopener noreferrer"><img src={pocketfulLogo} id="pocketfulLogo" alt="pocketful logo" /></a>
        </div>
        
        <Ribbon />
      </div>
      <Messaging />
    </Wrapper>
  );
};
