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

export const Info = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;
export const InfoText = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;
export const WeekLy = styled.text`
  font-size: 48px;
  margin-bottom: 10px;
`;
export const Description = styled.text`
  font-size: 14px;
`;
export const Image = styled.img`
  height: 20vw;
  margin: 0 20px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

export const Icons = styled.section`
  display: flex;
  align-items: center;
`;

export const MuiSvgIcon = styled.section`
  margin-right: 20px;
`;

export const Shuffle = styled.section`
  font-size: 80px !important;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  :hover {
  transition: 100ms transform ease-in;
  transform: scale(1.08);
}
`;

export const Songs = styled.section`
  margin: 20px -30px;
}
`;
