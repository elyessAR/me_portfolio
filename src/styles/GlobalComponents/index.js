import styled from 'styled-components';

export const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '48px 48px 0')};
  margin: 0 auto;
  max-width: 1100px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 32px 32px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '24px 16px 0')};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? 'clamp(36px, 6vw, 72px)' : 'clamp(28px, 4vw, 48px)')};
  line-height: 1.1;
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? '0 0 16px' : '0')};
  letter-spacing: -0.02em;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? '0 0 8px' : '0')};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 640px;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 400;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.55);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 17px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    padding-bottom: 16px;
  }
`;

export const SectionDivider = styled.div`
  width: 48px;
  height: 4px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gradient};
  margin: ${(props) => (props.divider ? '4rem 0' : '0 0 2rem')};

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 3px;
  }
`;
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const SecondaryBtn = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.div`
  width: ${({ $alt }) => ($alt ? '150px' : '200px')};
  height: ${({ $alt }) => ($alt ? '48px' : '52px')};
  border-radius: 12px;
  font-size: ${({ $alt }) => ($alt ? '16px' : '17px')};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ $alt, $form }) => ($alt || $form ? '0' : '0 0 80px')};
  color: #fff;
  background: ${({ $alt }) =>
    $alt
      ? 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)'
      : 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)'};
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  box-shadow: 0 4px 24px rgba(6, 182, 212, 0.25);

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ $alt }) => ($alt ? '150px' : '184px')};
    height: ${({ $alt }) => ($alt ? '48px' : '48px')};
    font-size: ${({ $alt }) => ($alt ? '16px' : '16px')};
    margin-bottom: ${({ $alt }) => ($alt ? '0' : '64px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 48px;
    font-size: 15px;
    margin-bottom: ${({ $alt }) => ($alt ? '0' : '32px')};
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 12px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ $alt }) =>
    $alt
      ? 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)'
      : 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'};
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  transition: 0.3s ease;
  font-size: ${({ $alt }) => ($alt ? '16px' : '17px')};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ $alt }) => ($alt ? '16px' : '16px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? '24px' : '16px')};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? '16px' : '8px')};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? '0' : '8px')};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? '32px' : '24px')};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? '16px' : '24px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => (large ? '32px' : '16px')};
  }
`;
