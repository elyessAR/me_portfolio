import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineCode } from 'react-icons/hi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, LogoIcon, LogoLink } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <LogoIcon>
        <HiOutlineCode />
      </LogoIcon>
      <LogoLink href="/">
        <Span>EA</Span>
      </LogoLink>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/elyessAR" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="2.2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/elyes-arifa-9142b9179/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="2.2rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
