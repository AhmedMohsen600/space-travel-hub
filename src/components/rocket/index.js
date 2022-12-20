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
} from './styles/rocket';

export default function Rocket() {
  return (
    <Container>
      <Inner>
        <RocketHolder>
          <ImageHolder>
            <RocketImage src="https://img.freepik.com/free-vector/rocket-flying-moon-cartoon-vector-icon-illustration-technology-transportation-icon-isolated_138676-5157.jpg?w=2000" />
          </ImageHolder>
          <RocketInfoHolder>
            <RocketName>Falcon 1</RocketName>
            <RocketDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              nobis eveniet atque officiis ab corporis labore accusamus harum
              praesentium laboriosam?
            </RocketDescription>
            <ReserveBtn>Reverse Rocket</ReserveBtn>
          </RocketInfoHolder>
        </RocketHolder>
        <RocketHolder>
          <ImageHolder>
            <RocketImage src="https://img.freepik.com/free-vector/rocket-flying-moon-cartoon-vector-icon-illustration-technology-transportation-icon-isolated_138676-5157.jpg?w=2000" />
          </ImageHolder>
          <RocketInfoHolder>
            <RocketName>Falcon 1</RocketName>
            <RocketDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              nobis eveniet atque officiis ab corporis labore accusamus harum
              praesentium laboriosam?
            </RocketDescription>
            <ReserveBtn>Reverse Rocket</ReserveBtn>
          </RocketInfoHolder>
        </RocketHolder>
        <RocketHolder>
          <ImageHolder>
            <RocketImage src="https://img.freepik.com/free-vector/rocket-flying-moon-cartoon-vector-icon-illustration-technology-transportation-icon-isolated_138676-5157.jpg?w=2000" />
          </ImageHolder>
          <RocketInfoHolder>
            <RocketName>Falcon 1</RocketName>
            <RocketDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              nobis eveniet atque officiis ab corporis labore accusamus harum
              praesentium laboriosam?
            </RocketDescription>
            <ReserveBtn>Reverse Rocket</ReserveBtn>
          </RocketInfoHolder>
        </RocketHolder>
      </Inner>
    </Container>
  );
}
