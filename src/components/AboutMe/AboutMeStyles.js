import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  margin-top: 25vh;
  z-index: 10;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 20px;
    height: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 20px;
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  display: grid;

  gap: 20px;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0px;
    width: 90%;
    align-items: start;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 0px;
    width: 90%;
    align-items: start;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 0px;
    width: 75%;
    align-items: start;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 0px;
  }
`;

export const ContentHeader = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  text-align: left;
  position: relative;

  display: grid;
  grid-template-columns: min-content auto;

  h3 {
    white-space: nowrap;
    font-size: 3rem;
    font-weight: 300;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: 100%;
    h3 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;

export const TextContent = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: grid;
  align-items: center;
  justify-content: center;

  span {
    display: table;
    margin: 0 auto;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.accent};
  }
  p {
    margin-top: 15px;
    text-align: center;
  }
`;

export const ResumeLink = styled.button`
  display: flex;
  margin: 0 auto;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 10px;
  background: none;
  border: 2px solid ${(props) => props.theme.colors.accent};
  transition: 0.4s ease;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.accent};
  &:hover {
    border-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
`;

export const PhotoContent = styled.div`
  grid-column: 2;
  grid-row: 2;
  img {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 20px;
    grid-column: 1;
    grid-row: 3;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 20px;
    grid-column: 1;
    grid-row: 3;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 20px;
    grid-column: 1;
    grid-row: 3;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: 20px;
    grid-column: 1;
    grid-row: 3;
  }
`;

export const Line = styled.div`
  width: calc(100% - 20px);
  margin-left: 20px;
  margin-bottom: auto;
  margin-top: auto;
  height: 1px;
  background-color: ${(props) => props.theme.colors.primary};
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;
