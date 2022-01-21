import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  flex: 1;
  color: white;
  padding: 30px;
  background: linear-gradient(#282828, rgba(0, 0, 0, 1));
  width: 90%;
  display: flex;
  flex-direction: column;
}
`;

export const Info = styled.section`
  display: flex;
  align-items: left;
  padding: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const InfoText = styled.section`
  display: flex;
  align-items: left;
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
  display: flex;
  align-items: flex-end;
  height: 15vw;
  width: 15vw;
  margin: 0 20px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

export const Icons = styled.section`
  display: flex;
  align-items: flex-end;
  margin: 0 20px;
`;

export const Songs = styled.section`
  margin: 10px ;
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;
