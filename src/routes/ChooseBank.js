import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

// images
import sandbanklogo from '../images/sandbanklogo.png'
import anzlogo from '../images/anzlogo.png'
import asblogo from '../images/asblogo.png'
import kiwibanklogo from '../images/kiwibanklogo.png'
import westpaclogo from '../images/westpaclogo.png'
import bnzlogo from '../images/bnzlogo.png'
import heartlandlogo from '../images/heartlandlogo.png'
import hsbclogo from '../images/hsbclogo.png'
import tsblogo from '../images/tsblogo.png'

const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
  display: flex;
`

const SelectionBox = styled('div')`
  border-top: 2px solid #2b237c;
  border-radius: 1rem;
  min-width: 300px;
  max-width: 360px;
  overflow: hidden;
  max-height: 560px;
  min-height: 360px;
  background-color: #fff;
  overflow-y: scroll;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
`

const Header = styled('h2')`
  padding-left: 0px;
  color: #444;
  border-width: 0px;
  border-bottom-width: 2px;
  border-style: solid;
  border-color: #f3f3f3;
  font-size: 16px;
  margin-top: 8px;
  text-align: center;
`

const BankColumn = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  overflow: scroll;
  max-height: 485px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`

const BankWrapper = styled('div')`
  width: 135px;
  height: 90px;
  border: 1px solid #f4f7f9;
  padding: 0.5em;
  img {
    max-width: 100%;
    max-height: 100px;
  }

  :hover {
    img {
      opacity: 0.2;
    }
    p {
      opacity: 1;
    }
  }

  p {
    text-align: center;
    margin-top: -15px;
    margin-bottom: 0;
    opacity: 0; 
  }
`

const BankButton = ({bankname, onHoverText})  => {
  let logo = null

  switch (bankname) {
    case 'sandbank':
      logo = sandbanklogo;
      break;
    case 'anz':
      logo = anzlogo;
      break;
    case 'asb':
      logo = asblogo;
      break;
    case 'kiwibank':
      logo = kiwibanklogo;
      break;
    case 'westpac':
      logo = westpaclogo;
      break;
    case 'bnz':
      logo = bnzlogo;
      break;
    case 'heartland':
      logo = heartlandlogo;
      break;
    case 'hsbc':
      logo = hsbclogo;
      break;
    case 'tsb':
      logo = tsblogo;
      break;
    default:
      break;
  }

  return (
    <BankWrapper>
      <img src={logo} alt={`${bankname}-logo`} />
      <p>{onHoverText}</p>
    </BankWrapper>
  )
}

const Banner = () => {
  const BannerWrapper = styled('div')`
    position: fixed;
    background-color: #2b237c;
    color: whitesmoke;
    padding: 14px;
    width: 100%;
    opacity: 0.8;
  `
  return (
    <BannerWrapper>
      <p style={{MarginBottom: '8px', textAlign: 'center'}}>Due to potential changes in the BankEngine API we have faked this page for this demo</p>
      <p style={{fontWeight: 'bold', marginBottom: '0', textAlign: 'center'}}>Select Sandbank to continue</p>
    </BannerWrapper>
  )
}

export const ChooseBank = () => {
  return (
    <React.Fragment>
      <Banner />
      <Wrapper>
        <SelectionBox>
          <Header>Choose your bank</Header>
          <BankColumn>
            <Link to="/authentication">
              <BankButton bankname="sandbank" onHoverText="Click Here" />
            </Link>
            <BankButton bankname="anz" onHoverText='Coming Soon' />
            <BankButton bankname="asb" onHoverText='Coming Soon' />
            <BankButton bankname="kiwibank" onHoverText='Coming Soon' />
            <BankButton bankname="westpac" onHoverText='Coming Soon' />
            <BankButton bankname="bnz" onHoverText='Coming Soon' />
            <BankButton bankname="heartland" onHoverText='Coming Soon' />
            <BankButton bankname='hsbc' onHoverText='Coming Soon' />
            <BankButton bankname='tsb' onHoverText='Coming Soon' />
          </BankColumn>
        </SelectionBox>
      </Wrapper>
    </React.Fragment>
  )
}
