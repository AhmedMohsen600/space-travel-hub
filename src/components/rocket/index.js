import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reservation } from '../../features/rockets/rocketsSlice';
import {
  Container,
  RocketName,
  RocketHolder,
  RocketDescription,
  RocketInfoHolder,
  RocketImage,
  ImageHolder,
  ReserveBtn,
  Inner,
  Loading,
  Group,
  Mark,
} from './styles/rocket';

export default function Rocket() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rockets.data);
  const loading = useSelector((state) => state.rockets.loading);

  return (
    <Container>
      <Inner>
        {loading ? (
          <Loading>Loading</Loading>
        ) : (
          rockets.map((rocket) => (
            <RocketHolder key={rocket.id}>
              <ImageHolder>
                <RocketImage src={rocket.flickr_images} />
              </ImageHolder>
              <RocketInfoHolder>
                <RocketName>{rocket.rocket_name}</RocketName>
                <Group>
                  {rocket.reserved && <Mark>reserved</Mark>}
                  <RocketDescription>{rocket.description}</RocketDescription>
                </Group>
                <ReserveBtn
                  reserved={rocket.reserved}
                  onClick={() => dispatch(reservation(rocket.id))}
                >
                  {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                </ReserveBtn>
              </RocketInfoHolder>
            </RocketHolder>
          ))
        )}
      </Inner>
    </Container>
  );
}
