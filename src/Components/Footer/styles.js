import styled from 'styled-components';

export const Container = styled.section`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;
}
`;

export const ContainerLeft = styled.section`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: white;
  max-width: 300px;
`;

export const ContainerCenter = styled.section`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`;

export const ContainerRight = styled.section`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const Image = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

export const SongInfo = styled.section`
  margin-bottom: 5px;
  font-size: 12px;
`;
