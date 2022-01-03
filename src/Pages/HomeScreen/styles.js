import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  flex: 0.8;
  color: white;
  padding: 30px;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  overflow-y: overlay;
  :-webkit-scrollbar {
  display: none;
}
`;

export const Body = styled.section`
  display: flex;
`;
