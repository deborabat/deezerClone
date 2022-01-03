import styled from 'styled-components';

export const Container = styled.section`
  background-color: white;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #63605E ;
  position: static;
`;

export const ContainerRight = styled.div`
  margin-left:5vh ;
  display: flex;
  flex-direction: row;
`;
export const ContainerLeft = styled.div`
  margin-right:10vh ;
  margin-left:1vh ;
  font-size: calc(14px + 2vmin);
  color: black;
`;

export const Name = styled.text`
  margin-right:10vh ;
  margin-left:1vh ;
  font-size: calc(14px + 2vmin);
  color: black;
`;
