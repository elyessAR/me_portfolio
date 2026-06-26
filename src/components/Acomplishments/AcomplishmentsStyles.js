import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2rem 0 4rem;

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    max-width: 100%;
    margin: 2rem 0;
  }
`;

export const Box = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 2.4rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme.colors.gradientSubtle};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(139, 92, 246, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);

    &::after {
      opacity: 1;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const BoxNum = styled.h5`
  font-weight: 700;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
`;

export const BoxText = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.55);
  position: relative;
  z-index: 1;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;
