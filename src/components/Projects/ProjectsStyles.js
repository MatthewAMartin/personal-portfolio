import styled from "styled-components";

export const Img = styled.img`
  position: absolute;
  right: 0;
  max-height: 90%;
  max-width: 90%;
  overflow: hidden;
  bottom: 50%;
  -webkit-transform: translate(0, 50%);
  transform: translate(0, 50%);
  z-index: -1;
`;

export const TitleContent = styled.div`
  text-align: left;
  z-index: 20;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    text-align: center;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const CardInfo = styled.p`
  width: calc(100% - 20px);
  color: #e4e6e7;
  font-size: 1.5rem;
  line-height: 24px;
  text-align: left;
  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    text-align: center;
  }
`;

export const TagList = styled.ul`
  display: flex;
  font-size: 2.5rem;
  a {
    justify-self: center;
    align-items: start;
    transition: 0.4s ease;
    margin-top: 10px;
    padding-right: 15px;
    &:hover {
      color: ${(props) => props.theme.colors.hover};
      cursor: pointer;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    align-items: center;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    align-items: center;
    justify-content: center;
  }
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.45rem !important;
  margin-top: 10px;
  padding-right: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-right: 5px;
    padding-left: 5px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding-right: 5px;
    padding-left: 5px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  margin-top: 25vh;
  z-index: 10;
`;

export const ContentContainer = styled.div`
  width: 45%;
  height: 300px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-rows: repeat(auto, minmax(400px, 1fr));
  gap: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 90vh;
    margin-top: 10vh;
    align-items: start;
    grid-template-rows: repeat(auto);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    align-items: start;
    grid-template-rows: repeat(auto);
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 75%;
    align-items: start;
    grid-template-rows: repeat(auto);
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: min-content auto;
  justify-self: center;
  align-items: start;
  text-align: left;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 1;
  transition: all 0.3s ease;
  h3 {
    font-size: 2.25rem;
    color: ${(props) => props.theme.colors.secondary};
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-weight: 100;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.primary};
  }
  li {
    font-size: 1.65rem;
    margin-bottom: 5px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const ProjectContent = styled.div`
  width: calc(100% - 40px);
  height: min-content;
  position: relative;
  grid-column: 2;
  grid-row: 1;
  display: none;
  grid-auto-rows: min-content;
  justify-self: left;
  align-items: middle;
  text-align: left;
  margin-left: 40px;
  z-index: 1;
  transition: all 0.3s ease;
  padding: 25px;
  background-color: rgb(63, 69, 77);
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25),
    -3px -3px 10px 3px rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: 10px;
    font-weight: 100;
    font-size: 2.25rem;
    color: ${(props) => props.theme.colors.primary};
  }
  p {
    margin-bottom: 10px;
  }
  li {
    font-size: 1.65rem;
    margin-bottom: 5px;
  }
  &.active {
    display: grid;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    grid-column: 1;
    grid-row: 2;
    padding: 10px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    grid-column: 1;
    grid-row: 2;
    padding: 10px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    grid-column: 1;
    grid-row: 2;
    padding: 10px;
  }
`;

// Button Links
export const ButtonList = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: block;
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0px;
  margin: 0px;
  list-style: none;
  transition: 0.4s ease;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
  &.active {
    color: ${(props) => props.theme.colors.hover};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: auto;
    margin-right: auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: auto;
    margin-right: auto;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProjectButton = styled.button`
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: var(--transition);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 20px 0px;
  border: none;
  border-left: 1px solid ${(props) => props.theme.colors.accent};
  background-color: transparent;
  color: ${(props) => props.theme.colors.accent};
  text-align: left;
  font-size: 1.45rem;
  white-space: nowrap;
  transition: 0.4s ease;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
    background-color: rgb(63, 69, 77);
    font-weight: 100;
  }
  &.active {
    color: ${(props) => props.theme.colors.hover};
    background-color: rgb(63, 69, 77);
    border-left: 1px solid ${(props) => props.theme.colors.hover};
    font-weight: 100;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
