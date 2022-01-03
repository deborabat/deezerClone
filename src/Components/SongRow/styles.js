import styled from 'styled-components';

export const Container = styled.section`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;
  :hover {
  cursor: pointer;
  background-color: black;
  opacity: 0.8;
}
`;

export const Info = styled.section`
  margin-left: 20px;
`;

export const Name = styled.text`
  font-size: 16px;
`;

export const Album = styled.img`
  height: 40px;
  width: 40px;
`;

export const Text = styled.text`
  font-size: 14px;
  margin-top: 3px;
  color: gray;
`;
