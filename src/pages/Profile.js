import { useSelector } from 'react-redux';
import { Profile } from '../components';

export default function ProfilePage() {
  const reservedRockets = useSelector((state) => state.rockets.data).filter(
    (rocket) => rocket.reserved === true
  );

  const reservedMissions = useSelector((state) =>
    state.missions.missionsArr.filter((mission) => mission.activeMission)
  );

  return (
    <Profile
      reservedRockets={reservedRockets}
      reservedMissions={reservedMissions}
    />
  );
}
