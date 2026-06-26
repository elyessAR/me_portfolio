import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0 4rem;
  width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    gap: 1.6rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    margin: 2rem 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem;
  border-radius: 16px;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    color: ${props => props.theme.colors.accent1};
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: rgba(139, 92, 246, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);

    svg {
      transform: scale(1.1);
      color: ${props => props.theme.colors.accent2};
    }
  }
`;

export const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.gradientSubtle};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.3;
  color: #FFFFFF;
  margin-bottom: 8px;
  letter-spacing: -0.01em;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const ListParagraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;
