import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: none;
  ::placeholder {
    color: #B9B7B6;
`;

export const ErrorMsg = styled.text`
  padding: 0.5em;
  margin: 0.5em;
  color: red;
  background: white;
  font-size: calc(14px + 2vmin);
`;
