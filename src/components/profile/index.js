import {
  BookedMissionsWrapper,
  MissionsWrapper,
  RocketsWrapper,
  Mission,
  Rocket,
} from './styles/profile';

const Profile = ({ reservedRockets, reservedMissions }) => {
  return (
    <>
      <BookedMissionsWrapper>
        <MissionsWrapper>
          <h2>My Missions</h2>
          {reservedMissions.map((mission) => (
            <Mission key={mission.mission_id}>{mission.mission_name}</Mission>
          ))}
        </MissionsWrapper>
        <RocketsWrapper>
          <h2>My Rockets</h2>
          {reservedRockets.map((rocket) => (
            <Rocket key={rocket.rocket_id}>{rocket.rocket_name}</Rocket>
          ))}
        </RocketsWrapper>
      </BookedMissionsWrapper>
    </>
  );
};

export default Profile;
