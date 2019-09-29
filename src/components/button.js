import { Button } from "antd";
import styled from "styled-components";
import { theme } from "../theme";

export const StyledButton = styled(Button)`
  color: whitesmoke;
  font-weight: 600;

  ${props =>
    props.type && props.type === "primary"
      ? `
    background-color: ${theme.color.primary};
    border-color: ${theme.color.primary};

    :hover {
      background-color: ${theme.color.secondary};
      border-color: ${theme.color.secondary};
      color: whitesmoke;
    }
  `
      : null}
  
  ${props =>
    props.type && props.type === "secondary"
      ? `
    background-color: ${theme.color.secondary};
    border-color: ${theme.color.secondary};

    :hover {
      background-color: ${theme.color.primary};
      border-color: ${theme.color.primary};
      color: whitesmoke;
    }
  `
      : null}

  ${props =>
    props.type && props.type === "ghost"
      ? `
    background-color: white;
    border-color: ${theme.color.primary};
    color: ${theme.color.primary};

    :selection {
      background-color: white;
      border-color: ${theme.color.primary};
      color: ${theme.color.primary};
    }

    :hover {
      background-color: white;
      border-color: ${theme.color.primary};
      color: ${theme.color.primary};
    }
    :focus {
      background-color: white;
      border-color: ${theme.color.primary};
      color: ${theme.color.primary};
    }
  `
      : null}
`;
