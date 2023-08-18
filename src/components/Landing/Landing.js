import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LandingContainer,
  TitleContainer,
  Title,
  Subtitle,
  CTALink,
  CTASpan,
  Line,
  VerticalLine,
  LineContainer,
} from "./LandingStyles";

const Landing = (props) => {
  const [play, setPlay] = useState(false); // animation play state
  const [showVL, setShowVL] = useState(false); // vertical line show state
  const [titleTyping, setTitleTyping] = useState(true);
  const [subtitleTyping, setSubtitleTyping] = useState(false);

  // If the user has scrolled more than 100px, play the animation
  const controlAnimation = () => {
    if (window.scrollY > 20) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };

  // If the user has scrolled more than their screen height, show the vertical line
  const controlLine = () => {
    if (window.scrollY > screen.height) {
      setShowVL(true);
    } else {
      setShowVL(false);
    }
  };

  // Add scroll event listeners for controlAnimation and controlLine
  useEffect(() => {
    setTimeout(() => {
      setTitleTyping(false);
      setSubtitleTyping(true);
    }, 2500);

    window.addEventListener("scroll", controlAnimation);
    window.addEventListener("scroll", controlLine);
    return () => {
      window.removeEventListener("scroll", controlAnimation);
      window.removeEventListener("scroll", controlLine);
    };
  }, []);

  return (
    <LandingContainer>
      <TitleContainer>
        <Title className={`${titleTyping && "typing"}`}>
          Hi, I'm Matthew Martin
        </Title>
        <div style={{width: "min-content"}}>
          <Subtitle className={`${subtitleTyping && "typing"}`}>
            and I'm a junior web developer.
          </Subtitle>
        </div>

        <Link href="#aboutme">
          <CTALink className={`${play && "scroll-down"}`}>
            <CTASpan>Learn About Me</CTASpan>
            <Line className="hz-line"></Line>
            <Line className="vt-line"></Line>
            <LineContainer>
              <VerticalLine className={`${showVL && "show"}`}></VerticalLine>
            </LineContainer>
          </CTALink>
        </Link>
      </TitleContainer>
    </LandingContainer>
  );
};

export default Landing;
