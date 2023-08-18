import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

// Main Header Container
export const HeaderContainer = styled.div`
  display: flex;
  padding: 0rem 3rem 0rem 3rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  height: 0px;
  width: 100vw;
  backdrop-filter: blur(5px);
  filter: none !important;
  user-select: auto !important;
  opacity: 0;
  pointer-events: none;

  transition-timing-function: ease;
  transition: 0.5s;

  &.open {
    height: 100px;
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
  &.active {
    color: ${(props) => props.theme.colors.hover};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
