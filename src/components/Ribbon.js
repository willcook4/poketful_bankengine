import React from "react";
import styled from "styled-components";
import { Tooltip } from 'antd'

const Wrapper = styled('div')`
  top: auto;
  bottom: 25px;
  left: -60px;
  transform: rotate(45deg);
  position: fixed;
  width: 250px;
  background: gold;
  text-align: center;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: grey;
  opacity: 0.8;

  :hover {
    cursor: pointer;
  }

  p {
    font-weight: bold;
    font-family: sans-serif;
  }

  p:first-child {
    margin-top: 6px;
    border-top: 2px dotted white;
  }

  p:last-child {
    margin-bottom: 6px;
    border-bottom: 2px dotted white;
  }
`

export class Ribbon extends React.Component {
  render() {
    return (

      <Tooltip title={<span style={{textAlign: 'center'}}>At NZ's first Open Banking Hackathon organised by BankEngine, 2019</span>} placement="right">
        <Wrapper>
          <p>Social Impact</p>
          <p>Prize Winner!</p>
        </Wrapper>
      </Tooltip>
    )
  }
}