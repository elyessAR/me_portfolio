import styled from "styled-components";

export const CarouselContainer = styled.ul`
  max-width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 4rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
    gap: 0;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => (final ? `120%` : `min-content`)};
  }
`;

export const CarouselItem = styled.div`
  flex: 1;
  padding: 2rem;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${(props) => props.theme.colors.gradient};
    border-radius: 4px 0 0 4px;
  }

  &:hover {
    border-color: rgba(6, 182, 212, 0.25);
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 16px;
    min-width: 240px;
    scroll-snap-align: start;
    opacity: ${(props) => (props.active === props.index ? `1` : `0.6`)};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const CarouselItemImg = styled.svg`
  display: none;
`;

export const CarouselItemText = styled.p`
  font-size: 1.4rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
    gap: 8px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) => (props.active === props.index ? `scale(1.4)` : `scale(1)`)};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background: ${(props) => props.theme.colors.gradient};
  border-radius: 10px;
  margin: auto;
  width: 8px;
  height: 8px;
`;
