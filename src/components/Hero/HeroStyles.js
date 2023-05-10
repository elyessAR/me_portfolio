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

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;
export const StyledImage = styled.div`
  border-radius: 50%;
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Flexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: center;
  }
`;
