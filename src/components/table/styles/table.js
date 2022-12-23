import styled from 'styled-components';

export const MissionsWrapper = styled.table`
  border-collapse: collapse;
  width: 95%;
  margin: auto;
`;

export const MainHeadings = styled.thead`
  th {
    border: 1px solid #b8b8b8;
    text-align: left;
    padding: 8px;
  }
`;

export const TableBody = styled.tbody`
  td {
    border: 1px solid #b8b8b8;
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(odd) {
    background-color: #dddddd;
  }
`;

export const MissionStatusWrapper = styled.td`
  width: 10%;
`;
export const MissionStatus = styled.h2`
  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
  padding: 0.3rem 0;
  border-radius: 3px;
  color: #fff;
  background: ${({ active }) => (active ? '#6c757e' : '#1AA1B9')};
`;

export const JoinMission = styled.button`
  display: block;
  margin: auto;
  padding: 0.5rem 1rem;
  background: none;
  border-radius: 3px;
  border: 1px solid ${({ active }) => (active ? '#df4754' : '#6c757e')};
  color: ${({ active }) => (active ? '#df4754' : '#6c757e')};
`;
