import React, { useState } from "react";

import { SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  HeroContainer,
  HeroContent,
  LeftSection,
  RightSection,
  RoleBadge,
  HeroSubtitle,
  StyledImageWrapper,
  ImageInner,
  Spinner,
  ButtonGroup,
} from "./HeroStyles";
import BgAnimation from "../BackgrooundAnimation/BackgroundAnimation";
import Image from "next/image";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HeroContainer>
      <BgAnimation />
      <HeroContent>
        <LeftSection>
          <RoleBadge>Available for freelance work</RoleBadge>
          <SectionTitle main>
            Elyes Arifa
          </SectionTitle>
          <HeroSubtitle>Software Engineer</HeroSubtitle>
          <SectionText>
            Experienced software engineer with expertise in full stack development, proficient with various frameworks and
            libraries. Able to work independently on projects, as well as collaborate as part of a team when needed.
          </SectionText>
          <ButtonGroup>
            <Button onClick={() => (window.location = "https://www.upwork.com/freelancers/~01eca81ee658286fea")}>
              Hire Me
            </Button>
            <Button alt onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Work
            </Button>
          </ButtonGroup>
        </LeftSection>

        <RightSection>
          <StyledImageWrapper>
            {isLoading && <Spinner />}
            <ImageInner>
              <Image
                src="/images/portfoliopicture.png"
                alt="Elyes Arifa"
                width={272}
                height={272}
                onLoad={() => setIsLoading(false)}
              />
            </ImageInner>
          </StyledImageWrapper>
        </RightSection>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
