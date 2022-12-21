import { useSelector } from 'react-redux';

export default function Profile() {
  const reservedRockets = useSelector((state) => state.rockets.data).filter(
    (rocket) => rocket.reserved === true
  );
  return (
    <div>
      {reservedRockets.map((rocket) => (
        <div key={rocket.id}>{rocket.rocket_name}</div>
      ))}
    </div>
  );
}
