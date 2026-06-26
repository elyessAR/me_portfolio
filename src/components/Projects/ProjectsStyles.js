import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.4rem;
  padding: 1rem 0 3rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 1rem 0 2rem;
  }
`;

export const BlogCard = styled.div`
  border-radius: 16px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(6, 182, 212, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(6, 182, 212, 0.08);
  }
`;

export const TitleContent = styled.div`
  padding: 1.6rem 1.6rem 0;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  color: #fff;
  font-size: ${(props) => (props.$title ? '2rem' : '1.6rem')};
  letter-spacing: -0.01em;
`;

export const Hr = styled.hr`
  width: 40px;
  height: 3px;
  margin: 12px 0 0;
  border: 0;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.gradient};
`;

export const CardInfo = styled.p`
  padding: 1.2rem 1.6rem;
  color: rgba(255, 255, 255, 0.55);
  font-size: 1.4rem;
  line-height: 1.65;
`;

export const StackLabel = styled.p`
  padding: 0 1.6rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.35);
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 1.2rem 1.6rem 1.6rem;
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => (props.$secondary ? 'rgba(255,255,255,0.7)' : '#fff')};
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.6rem;
  background: ${(props) =>
    props.$secondary ? 'transparent' : props.theme.colors.gradient};
  border: ${(props) =>
    props.$secondary ? `1px solid ${props.theme.colors.border}` : 'none'};
  border-radius: 8px;
  transition: all 0.25s ease;
  flex: 1;
  text-align: center;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
    border-color: ${(props) => props.$secondary && 'rgba(6, 182, 212, 0.4)'};
    color: #fff;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem 0;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.accent1};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 100px;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.2);
`;
