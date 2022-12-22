import styled from 'styled-components/macro';

export const Container = styled.header`
  min-height: 10vh;
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  width: 95%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding: 20px;
`;

export const Group = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const TextLink = styled.li`
  font-size: 20px;
  .active {
    color: #1aa1b9;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Image = styled.img`
  width: 10%;
`;

export const Title = styled.h1`
  font-size: 24px;
`;
