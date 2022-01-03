import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;
  :hover {
  color: white;
`;

export const Icon = styled.section`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Text = styled.section`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
`;
