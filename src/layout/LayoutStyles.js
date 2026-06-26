import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;
