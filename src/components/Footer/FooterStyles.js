import styled from "styled-components";

// Main Header Container
export const HeaderContainer = styled.div`
  display: flex;
  padding: 0rem 3rem 0rem 3rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 11;
  width: min-content;
  filter: none !important;
  user-select: auto !important;
  opacity: 0;
  pointer-events: none;

  transition-timing-function: ease;
  transition: 0.5s;

  &.open {
    width: min-content;
    opacity: 1;

    > * {
      pointer-events: auto;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

// Logo Element
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  a {
    transition: 0.4s ease;
  }
  a:hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

// Navigation Link Container
export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

// Navigation Link List
export const NavLinkList = styled.ol`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

// Individual Navigation Link List Elements
export const LinkListElement = styled.li`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

// Navigation Links
export const NavLink = styled.a`
  font-family: ${(props) => props.theme.fonts.headers};
  transition: 0.4s ease;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const IconGrid = styled.div`
  display: grid;
  width: 40px;
  grid-template-rows: min-content min-content min-content;
  justify-self: center;
  align-items: start;
  margin-bottom: 15px;
  font-size: 3.25rem;
  a {
    justify-self: center;
    align-items: start;
    transition: 0.4s ease;
    margin-bottom: 15px;
    &:hover {
      color: ${(props) => props.theme.colors.hover};
      cursor: pointer;
    }
  }
`;
