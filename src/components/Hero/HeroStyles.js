import styled from "styled-components";
import Image from "next/image";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const Flexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: center;
  }
`;
