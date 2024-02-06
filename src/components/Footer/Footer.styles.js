import styled from "styled-components";

export const Footer = styled.footer`
  text-align: center;
  margin-bottom: 15px;
`;

export const Text = styled.p`

`;

export const Link = styled.a.attrs({
  href:'https://github.com/LSzpilowski?tab=repositories'
})`
text-decoration: none;
color: black;

&:hover {
  color: blue;
  font-weight: bold;
}
`;