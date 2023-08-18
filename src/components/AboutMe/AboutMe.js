import React from "react";
import {
  PageContainer,
  ContentContainer,
  ContentHeader,
  TextContent,
  PhotoContent,
  Line,
  ResumeLink,
} from "./AboutMeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const AboutMe = (props) => (
  <PageContainer id="aboutme">
    <ContentContainer>
      <ContentHeader>
        <h3>About Me</h3>
        <Line className="hz-line"></Line>
      </ContentHeader>
      <TextContent>
        <div>
          <span>Hi, I'm Matthew!</span>
          <p>
            In 2020 I made the big decision to change career paths from civil
            engineering to software development. Since then, I have developed a
            love for using my skills to problem solve and develop new projects
            and solutions. Throughout my future career, I hope to join teams
            where I can push myself further, gather experience and continue
            learning new skills.
          </p>
          <p>
            I am currently not looking for work. But please don't hesitate to contact me via my email or linkedin.
          </p>
        </div>

        <a
          href="/files/Resume_Matthew-Martin.pdf"
          download="Resume_Matthew-Martin"
        >
          <ResumeLink title="Resume">
            <FontAwesomeIcon
              icon={solid("download")}
              className="fa-1x icon"
              style={{ "font-size": "2.5rem", "margin-right": "15px" }}
            />
            Resume
          </ResumeLink>
        </a>
      </TextContent>
      <PhotoContent>
        <img src="/images/profile.png" alt="Photo of Matthew Martin"></img>
      </PhotoContent>
    </ContentContainer>
  </PageContainer>
);

export default AboutMe;
