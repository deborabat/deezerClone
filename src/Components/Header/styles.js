import styled from 'styled-components';

export const Container = styled.section`
  background-color: #282828;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: static;
`;

export const ContainerRight = styled.div`
  margin-left: 5vh;
  display: flex;
  flex-direction: row;
  width: 20%;
`;
export const ContainerLeft = styled.div`
  margin-right: 10vh;
  margin-left: 1vh;
  font-size: calc(8px + 2vmin);
  color: gray;
  background-color: #282828;
  width: 70%;
`;

export const Name = styled.text`
  margin-right: 1vh;
  margin-left: 1vh;
  font-size: calc(6px + 2vmin);
  color: gray;
`;
