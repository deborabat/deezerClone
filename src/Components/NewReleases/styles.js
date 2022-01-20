import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 70vw;
  display: flex;
  flex: 1;
  color: white;
  padding: 30px;
  background: linear-gradient(#282828, rgba(0, 0, 0, 1));
  flex-direction: column;
}
`;

export const Info = styled.section`
  display: flex;
  padding: 10px;
  width: calc(100% / 2);
  flex-direction: column;
`;

export const Image = styled.img`
  display: flex;
  height: 10vw;
  width: 10vw;
  margin: 50px 20px;
`;
export const Description = styled.text`
  display: flex;
  font-size: calc(8px + 2vmin);
  width: 100%;
  margin: 0 20px;
`;

export const Item = styled.section`
  display: flex;
  padding: 10px;
  width: calc(100% / 3);
  flex: 1;
`;
