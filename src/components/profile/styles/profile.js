import styled from 'styled-components';

export const BookedMissionsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin: auto;
  gap: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
`;

export const MissionsWrapper = styled.div`
  margin-top: 2rem;
`;

export const Mission = styled.h3`
  border: 1px solid #000;
  border-bottom: none;
  padding: 0.5rem 0 1rem 0.5rem;
  font-weight: 300;
  &:last-child {
    border-bottom: 1px solid #000;
  }
`;

export const RocketsWrapper = styled.div`
  margin-top: 2rem;
`;

export const Rocket = styled.h3`
  border: 1px solid #000;
  border-bottom: none;
  padding: 0.5rem 0 1rem 0.5rem;
  font-weight: 300;
  &:last-child {
    border-bottom: 1px solid #000;
  }
`;
