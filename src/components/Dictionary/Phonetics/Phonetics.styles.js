import styled from "styled-components";

export const PronounceButton = styled.button`
  padding: 5px 15px;
  margin: 10px;
  border: 1px;
  border-radius: 15px;
  color: #9670f4;
  font-size: 15px;
  text-align: center;
  transition: all 150ms ease-in-out;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #9670f4;
    color: white;
  }
`;

export const PronounceText = styled.span`
  font-weight: 900;
  opacity: 0.6;
`;
