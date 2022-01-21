import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  /* background: gray; */
  padding: 0 100px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: inherit;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: fit-content;
  height: inherit;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: fit-content;
  height: inherit;
  text-transform: uppercase;
`;
