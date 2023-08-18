import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  PageContainer,
  ContentContainer,
  ContentHeader,
  Line,
  TextContent,
} from "./SkillsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Skills = () => (
  <PageContainer id="skills">
    <ContentContainer>
      <TextContent>
        <img src="/images/icons/web-browser.svg" height={50} />
        <h3>Front-End</h3>
        <h4>Languages</h4>
        <ul>
          <li>HTML</li>
          <li>CSS / SASS / SCSS</li>
          <li>JavaScript</li>
          <li>Typescript</li>
        </ul>
        <h4>Frameworks</h4>
        <ul>
          <li>React & Next.js</li>
          <li>Angular</li>
        </ul>
        <h4>Style Libraries</h4>
        <ul>
          <li>Chakra UI</li>
          <li>Bootstrap</li>
        </ul>
      </TextContent>
      <TextContent>
        <img src="/images/icons/database.svg" height={50} />
        <h3>Back-End</h3>
        <h4>Environments</h4>
        <ul>
          <li>Node.js</li>
        </ul>
        <h4>Frameworks</h4>
        <ul>
          <li>Express</li>
        </ul>
        <h4>Databases</h4>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
        <h4>Services</h4>
        <ul>
          <li>Supabase</li>
        </ul>
      </TextContent>
      <TextContent>
        <img src="/images/icons/other.svg" height={50} />
        <h3>Other</h3>
        <h4>Languages</h4>
        <ul>
          <li>Java</li>
        </ul>
        <h4>Tools</h4>
        <ul>
          <li>GitHub</li>
          <li>Figma</li>
          <li>Confluence & Jira</li>
          <li>AWS</li>
        </ul>
        <h4>Skills</h4>
        <ul>
          <li>Data Structures</li>
          <li>Algorithms</li>
          <li>Systems Analysis & Design</li>
        </ul>
      </TextContent>
    </ContentContainer>
  </PageContainer>
);

export default Skills;
