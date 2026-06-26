import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 4rem 0;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
    text-align: center;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.md} {
    align-items: center;
    order: 2;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    order: 1;
  }
`;

export const HeroSubtitle = styled.h3`
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin: -8px 0 20px;
  letter-spacing: 0.01em;
`;

export const RoleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 100px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.accent1};
  margin-bottom: 20px;
  letter-spacing: 0.02em;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.accent1};
    box-shadow: 0 0 8px ${(props) => props.theme.colors.accent1};
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  padding: 4px;
  background: ${(props) => props.theme.colors.gradient};
  box-shadow: 0 0 60px rgba(6, 182, 212, 0.2), 0 0 120px rgba(139, 92, 246, 0.1);

  img {
    border-radius: 50%;
    object-fit: cover;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 200px;
    height: 200px;
  }
`;

export const ImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: ${(props) => props.theme.colors.background1};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: ${(props) => props.theme.colors.accent1};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  z-index: 2;

  @keyframes spin {
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
`;
