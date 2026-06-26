import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1100px;
  padding: 3rem 0 4rem;
  margin: 4rem auto 0;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

export const LinkItem = styled.a`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.accent1};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.4rem;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.02em;
  font-size: 1.5rem;
  line-height: 1.6;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 2.4rem;
  padding-bottom: 2.4rem;

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    text-align: center;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkTitle = styled.h4`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 8px;
`;
