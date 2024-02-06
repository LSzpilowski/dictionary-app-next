import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  margin: 25px auto;
`;

export const SearchBox = styled.div`
  padding: 20px;
  display: block;
  margin: 15px 0;
  border: 1px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const SearchBoxTitle = styled.p`
  font-size: 1.25em;
  margin: 10px 0;
`;

export const Form = styled.form`
  font-size: 1em;
`;

export const SearchWord = styled.input.attrs({
  type: "search",
  placeholder: "type here...",
})`
  margin: 5px 5px;
  width: 99%;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  color: #333;
`;

export const Suggest = styled.p`
  opacity: 0.8;
  font-size: 0.75em;
`;

export const ResultsBox = styled.div`
  display: block;
  margin: 0;
  border: 1px;
  border-radius: 10px;
`;
