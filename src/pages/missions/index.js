import {
  MissionsWrapper,
  MainHeadings,
  TableBody,
  MissionStatus,
  JoinMission,
} from './styles/missions';

const Missions = () => {
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
        <tr>
          <td>Thaicom</td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            massa sed turpis gravida finibus. Donec ornare egestas ligula et
            consectetur.
          </td>
          <td>
            <MissionStatus type="button">NOT A MEMBER</MissionStatus>
          </td>
          <td>
            <JoinMission type="button">Join Mission</JoinMission>
          </td>
        </tr>
        <tr>
          <td>Thaicom</td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            massa sed turpis gravida finibus. Donec ornare egestas ligula et
            consectetur.
          </td>
          <td>
            <MissionStatus type="button">NOT A MEMBER</MissionStatus>
          </td>
          <td>
            <JoinMission type="button">Join Mission</JoinMission>
          </td>
        </tr>
        <tr>
          <td>Thaicom</td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            massa sed turpis gravida finibus. Donec ornare egestas ligula et
            consectetur.
          </td>
          <td>
            <MissionStatus type="button">NOT A MEMBER</MissionStatus>
          </td>
          <td>
            <JoinMission type="button">Join Mission</JoinMission>
          </td>
        </tr>
        <tr>
          <td>Thaicom</td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            massa sed turpis gravida finibus. Donec ornare egestas ligula et
            consectetur.
          </td>
          <td>
            <MissionStatus type="button">NOT A MEMBER</MissionStatus>
          </td>
          <td>
            <JoinMission type="button">Join Mission</JoinMission>
          </td>
        </tr>
        <tr>
          <td>Thaicom</td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            massa sed turpis gravida finibus. Donec ornare egestas ligula et
            consectetur.
          </td>
          <td>
            <MissionStatus type="button">NOT A MEMBER</MissionStatus>
          </td>
          <td>
            <JoinMission type="button">Join Mission</JoinMission>
          </td>
        </tr>
      </TableBody>
    </MissionsWrapper>
  );
};

export default Missions;
