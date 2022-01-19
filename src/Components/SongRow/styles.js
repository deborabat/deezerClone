import styled from 'styled-components';

export const Container = styled.section`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  flex-direction: column;
  :hover {
  cursor: pointer;
  background-color: black;
  opacity: 0.8;
  flex-direction: column;
}
`;

export const Info = styled.section`
  margin-left: 20px;
  color: white;
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
