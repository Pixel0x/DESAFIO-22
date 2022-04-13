import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  padding: 6.25rem 0 1.875rem 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    max-width: 3.125rem;
  }
`;

export const Infos = styled.div`
  font-family: "IBM Plex Mono", monospace;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  font-weight: 400;
  display: flex;
  gap: 3rem;
  color: var(--gray);

  @media (max-width: 440px) {
    gap: 1.125rem;
  }

  a {
    text-decoration: none;
    color: var(--gray);

    @media (max-width: 360px) {
      display: none;
    }
  }
`;
