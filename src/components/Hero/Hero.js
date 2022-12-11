import React from 'react';

import { Img, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Elyes Arifa <br />
        Software Engineering
      </SectionTitle>

      <SectionText>
        Experienced software engineer with expertise in full stack development, proficient with various frameworks and libraries. Able to work
        independently on projects, as well as collaborate with as a part of team when needed
      </SectionText>

      <Button onClick={() => (window.location = 'https://www.upwork.com/freelancers/~01eca81ee658286fea')}>Learn More</Button>
    </LeftSection>
    <LeftSection>
      <img width="400px" src={'/images/portfoliohero2.jpg'} />
    </LeftSection>
  </Section>
);

export default Hero;
