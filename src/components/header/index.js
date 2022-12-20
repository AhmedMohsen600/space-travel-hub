import { Link, Outlet, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  return (
    <>
      <Container>
        <Nav>
          <Logo>
            <Image />
            <Title>Space Travel&apos;s hub</Title>
          </Logo>
          <Group>
            {links.map(({ url, text }) => (
              <TextLink active={url === pathname} key={url}>
                <Link className="link" to={url}>
                  {text}
                </Link>
              </TextLink>
            ))}
          </Group>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
}
