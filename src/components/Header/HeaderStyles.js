import Link from 'next/link';
import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 1.2rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0 auto 1rem;
  max-width: 1100px;
  background: rgba(8, 8, 15, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 0.8rem;
    padding: 1rem 1.2rem;
    border-radius: 12px;
  }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1;
  }
`;

export const Div2 = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2.4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 3;
    justify-content: center;
    gap: 1.6rem;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 2;
  }
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gradient};
  color: white;
  font-size: 1.8rem;
`;

export const Span = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.colors.gradient};
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #fff;
    cursor: pointer;

    &::after {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }
`;

export const SocialIcons = styled.a`
  transition: all 0.25s ease;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
    background: ${(props) => props.theme.colors.surface};
    transform: translateY(-2px);
    cursor: pointer;
  }
`;
