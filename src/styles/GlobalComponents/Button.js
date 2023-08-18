import React from "react";
import styled from "styled-components";

export const PrimaryButton = styled.div`
  color: rgba(184, 0, 97, 1);
  background-color: transparent;
  border: 1px solid rgba(184, 0, 97, 1);
  border-radius: 3px;
  padding: 0.75rem 1rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
