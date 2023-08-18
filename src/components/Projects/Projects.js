import React from "react";
import { useState } from "react";
import {
  PageContainer,
  ContentContainer,
  ProjectCard,
  Img,
  TitleContent,
  HeaderThree,
  CardInfo,
  TagList,
  Tag,
  ButtonList,
  ProjectButton,
  ProjectContent,
} from "./ProjectsStyles";
import { projects } from "../../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Projects = () => {
  const [selected, setSelected] = useState(projects[0].title);

  return (
    <PageContainer id="projects">
      <ContentContainer>
        <ProjectCard>
          <ButtonList>
            {projects.map(({ id, title }) => (
              <ProjectButton
                key={id}
                onClick={() => setSelected(title)}
                className={selected == title ? "active" : ""}
              >
                {title}
              </ProjectButton>
            ))}
          </ButtonList>
          {projects.map(
            ({ id, title, description, image, tags, source }) => (
              <ProjectContent
                key={id}
                className={selected == title ? "active" : ""}
              >
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
                <TagList>
                  <a title="GitHub" href={source} target="_blank">
                    <FontAwesomeIcon
                      icon={brands("github")}
                      className="fa-1x icon"
                    />
                  </a>
                </TagList>
                {/* <Img src={image} alt="Photo of Project" /> */}
              </ProjectContent>
            )
          )}
        </ProjectCard>
      </ContentContainer>
    </PageContainer>
  );
};

export default Projects;
