import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  Nav,
  Group,
  TextLink,
  Logo,
  Image,
  Title,
} from './styles/header';
import { links } from '../../fixtures/links';
import './styles/nav.css';

export default function Header() {
  return (
    <>
      <Container>
        <Nav>
          <Logo>
            <Image src="/travel-hub.png" />
            <Title>Space Travel&apos;s hub</Title>
          </Logo>
          <Group>
            {links.map(({ url, text }) => (
              <TextLink key={url}>
                <NavLink activeclassname="active" className="link" to={url}>
                  {text}
                </NavLink>
              </TextLink>
            ))}
          </Group>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
}
