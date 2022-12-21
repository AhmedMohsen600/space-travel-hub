import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  margin-top: 20px;
`;

export const Inner = styled.ul`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const RocketHolder = styled.li`
  display: flex;
  gap: 16px;
`;

export const RocketImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageHolder = styled.div`
  max-width: 25%;
`;

export const RocketInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RocketName = styled.h3``;

export const RocketDescription = styled.p``;

export const ReserveBtn = styled.button`
  align-self: flex-start;
  background-color: ${({ reserved }) => (reserved ? 'transparent' : '#037bff')};
  padding: 10px 20px;
  border: ${({ reserved }) => (reserved ? '2px solid #6d757e' : '0')};
  color: ${({ reserved }) => (reserved ? '#6d757e' : '#fff')};
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Group = styled.div`
  display: flex;
  gap: 16px;
`;

export const Loading = styled.div`
  color: #037bff;
  font-size: 50px;
  text-align: center;
`;

export const Mark = styled.div`
  background: #1da1ba;
  color: #fff;
  font-size: 17px;
  height: 22px;
  border-radius: 5px;
  padding: 0 5px;
`;
