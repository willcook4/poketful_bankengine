import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import { Input, Button } from 'antd'

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
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Header = styled('h2')`
  padding-left: 0px;
  color: #444;
  font-size: 19px;
  margin-top: 13px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0;
`
const SubHeader = styled('h3')`
  margin: 0;
  text-align: center;
  font-size: 14px;
  border-bottom: 2px solid #f3f3f3;
`

const EmailInput = styled(Input)`
  width: 220px;
  height: 40px;
  margin-top: 25px;
`

const BEButton = styled(Button)`
  height: 64px;
  width: 220px;
  background: #2b237c;
  color: #fff;
  padding: 1.6rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  border-width: 0px;
  margin-top: 35px;
  span {
    display: block;
    margin-top: -16px;
  }
`

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
      <p style={{fontWeight: 'bold', marginBottom: '0', textAlign: 'center'}}>Select Login to continue</p>
    </BannerWrapper>
  )
}

export const Authentication = () => {
  return (
    <React.Fragment>
      <Banner />
      <Wrapper>
        <SelectionBox>
          <Header>SandBank</Header>
          <SubHeader>Enter your bank login details</SubHeader>

          <EmailInput value='danielle@youth.co.nz' />
          <Link to='/your-budget'>
            <BEButton>Login</BEButton>
          </Link>
        </SelectionBox>
      </Wrapper>
    </React.Fragment>
  )
}