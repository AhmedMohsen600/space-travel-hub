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

export const MissionStatus = styled.button``;

export const JoinMission = styled.button``;
