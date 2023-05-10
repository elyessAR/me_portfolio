import React, { useState } from "react";

import { Img, Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, StyledImageWrapper, Flexbox, Spinner, StyledImage } from "./HeroStyles";
import Image from "next/image";

const Hero = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LeftSection>
      <Flexbox>
        <StyledImageWrapper>
          {isLoading && <Spinner />}
          <Image
            src="/images/portfoliopicture.jpg"
            alt="My Image"
            width={200}
            height={200}
            onLoad={() => setIsLoading(false)}
          />
        </StyledImageWrapper>
      </Flexbox>

      <SectionTitle main center>
        Elyes Arifa <br />
        Software Engineer <br />
      </SectionTitle>

      <SectionText>
        Experienced software engineer with expertise in full stack development, proficient with various frameworks and
        libraries. Able to work independently on projects, as well as collaborate with as a part of team when needed
      </SectionText>

      <Button onClick={() => (window.location = "https://www.upwork.com/freelancers/~01eca81ee658286fea")}>
        Learn More
      </Button>
    </LeftSection>
  );
};

export default Hero;
