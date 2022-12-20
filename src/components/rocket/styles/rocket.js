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
`;

export const ImageHolder = styled.div`
  width: 100px;
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
  background: #037bff;
  padding: 10px 20px;
  border: 0;
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
`;

export const Group = styled.div``;
