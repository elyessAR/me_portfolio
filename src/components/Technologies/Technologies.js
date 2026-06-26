import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconWrapper } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world — from back-end to design.
    </SectionText>
    <List>
      <ListItem>
        <IconWrapper>
          <DiReact size="2.8rem" />
        </IconWrapper>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with React.js and Angular, building responsive and performant user interfaces.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IconWrapper>
          <DiFirebase size="2.8rem" />
        </IconWrapper>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Spring, Node.js and Express.js for robust API development.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IconWrapper>
          <DiZend size="2.8rem" />
        </IconWrapper>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with design tools like Figma for crafting intuitive user experiences.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
