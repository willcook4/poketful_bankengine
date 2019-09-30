import styled from "styled-components";

export const Wrapper = styled("div")`
  font-family: "Poppins", sans-serif;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  .page {
    background-color: #e9edf2;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    max-width: 430px;
    max-height: 830px;
    min-height: 650px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  #successMessage {
    margin: 0 auto;
  }
  h1 {
    margin-left: 20px;
  }
`;
