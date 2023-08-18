import styled from "styled-components";

export const LandingContainer = styled.div`
  height: 100vh;
  width: min-content;
  display: flex;
  align-items: center;
  padding-left: 10%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 10px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    padding-left: 20px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  width: min-content;
  margin: 0px 0px 10px 0px;
  font-weight: 400;
  font-size: 7rem;
  white-space: nowrap;
  overflow: hidden;

  &.typing {
    border-right: 2px solid ${(props) => props.theme.colors.hover};
    animation: typewriter1 1s steps(44) 1s normal both,
      blinkTextCursor 750ms steps(2, jump-none) infinite normal;
  }
  @keyframes typewriter1 {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right: 2px solid ${(props) => props.theme.colors.hover};
    }
    to {
      border-right-color: transparent;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 5rem;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 4.5rem;
  color: ${(props) => props.theme.colors.secondary};
  width: 0;
  height: 0;
  white-space: nowrap;
  overflow: hidden;

  &.typing {
    height: 100%;
    border-right: 2px solid ${(props) => props.theme.colors.hover};
    animation: typewriter 1.5s steps(44) 0.5s 1 normal both,
      blinkTextCursor 750ms steps(2, jump-none) infinite normal;
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right: 2px solid ${(props) => props.theme.colors.hover};
    }
    to {
      border-right-color: transparent;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 3rem;
  }
`;

export const CTALink = styled.a`
  margin-top: 6rem;
  display: flex;
  position: relative;
  width: 300px;
  height: 80px;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: none;
  cursor: pointer;
  background: none;
  font-family: ${(props) => props.theme.fonts.title};

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${(props) => props.theme.colors.accent};

    right: 0;
    top: 0;
    transition-delay: 0s;
  }
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${(props) => props.theme.colors.accent};

    left: 0;
    bottom: 0;
    transition-delay: 0.4s;
  }
  &:hover {
    span {
      color: ${(props) => props.theme.colors.hover};
    }

    &::before {
      width: 50%;

      transition-delay: 0.4s;
    }
    &::after {
      width: 0;

      transition-delay: 0s;
    }
    span {
      &::before {
        height: 0;

        transition-delay: 0.2s;
      }
    }
    .hz-line {
      &::after {
        width: 50%;

        transition-delay: 0s;
      }
    }
    .vt-line {
      &::after {
        height: 100vh;

        transition-delay: 0.2s;
      }
    }
  }

  &.scroll-down {
    &::before {
      width: 50%;

      transition-delay: 0.4s;
    }
    &::after {
      width: 0;

      transition-delay: 0s;
    }
    span {
      &::before {
        height: 0;

        transition-delay: 0.2s;
      }
    }
    .hz-line {
      &::after {
        width: 50%;

        transition-delay: 0s;
      }
    }
    .vt-line {
      &::after {
        height: 150vh;

        transition-delay: 0.2s;
      }
    }
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
`;

export const CTASpan = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.accent};
  font-weight: 400;
  font-size: 3rem;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }

  &::before {
    content: "";
    width: 0;
    height: 100%;
    position: absolute;
    transition: all 0.2s linear;
    border-left: 2px solid ${(props) => props.theme.colors.accent};

    transition-delay: 0.2s;
    left: 0;
    top: 0;
  }
  &::after {
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    transition: all 0.2s linear;
    background: ${(props) => props.theme.colors.accent};

    transition-delay: 0.2s;
    right: 0;
    bottom: 0;
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
`;

export const Line = styled.div`
  pointer-events: none;

  .hz-line {
    position: absolute;
    background: none;
    top: 100%;
    right: 0px;
  }

  .vt-line {
    position: absolute;
    background: none;
    background: ${(props) => props.theme.colors.primary}
    top: 100%;
    right: 50%;
  }

  .hz-line&::after {
    content: "";
    width: 0px;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${(props) => props.theme.colors.accent};

    top: calc(100% - 2px);
    right: 0;
    transition-delay: 0.4s;
  }

  .vt-line&::after {
    content: "";
    width: 2px;
    height: 0px;
    position: absolute;
    transition: all 0.4s linear;
    background: ${(props) => props.theme.colors.accent};

    top: calc(100% - 2px);
    right: 50%;
    transition-delay: 0s;

    .vt-line {
      width: 2px;
      height: 0px;
    }
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
`;

export const VerticalLine = styled.div`
  z-index: -1;

  &.show {
    position: fixed;
    background: ${(props) => props.theme.colors.accent};
    top: 0;
    width: 2px;
    height: 100vh;
    pointer-events: none;
  }
`;

export const LineContainer = styled.div`
  position: absolute;
  top: 0;
  right: calc(50% + 2px);
`;
