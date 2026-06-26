import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  StackLabel,
} from "./ProjectsStyles";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Personal Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => (
        <BlogCard key={i}>
          <Img src={p.image} alt={p.title} />
          <TitleContent>
            <HeaderThree $title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{p.description}</CardInfo>
          <StackLabel>Stack</StackLabel>
          <TagList>
            {p.tags.map((t, j) => (
              <Tag key={j}>{t}</Tag>
            ))}
          </TagList>
          <UtilityList>
            <ExternalLinks href={p.visit} target="_blank" rel="noopener noreferrer">Demo</ExternalLinks>
            <ExternalLinks href={p.source} target="_blank" rel="noopener noreferrer" $secondary>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
