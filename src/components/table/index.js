import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchMissions,
  changeMission,
} from '../../features/missions/missionsSlice';
import {
  MissionsWrapper,
  MainHeadings,
  TableBody,
  MissionStatus,
  JoinMission,
  MissionStatusWrapper,
} from './styles/table';

const Table = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missionsArr);
  useEffect(() => {
    if (missions.length) return;
    dispatch(fetchMissions());
  }, [dispatch, missions.length]);
  return (
    <MissionsWrapper>
      <MainHeadings>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th aria-label="Join or leave mission" />
        </tr>
      </MainHeadings>
      <TableBody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <MissionStatusWrapper>{mission.mission_name}</MissionStatusWrapper>
            <td>{mission.description}</td>
            <MissionStatusWrapper>
              <MissionStatus active={mission.activeMission} type="button">
                {mission.activeMission ? 'Active Member' : 'NOT A MEMBER'}
              </MissionStatus>
            </MissionStatusWrapper>
            <MissionStatusWrapper>
              <JoinMission
                active={mission.activeMission}
                onClick={() => dispatch(changeMission(mission.mission_id))}
                type="button"
              >
                {mission.activeMission ? 'Leave Mission' : 'Join Mission'}
              </JoinMission>
            </MissionStatusWrapper>
          </tr>
        ))}
      </TableBody>
    </MissionsWrapper>
  );
};

export default Table;
