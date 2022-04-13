import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  padding-bottom: 6.25rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;

  h2,
  p {
    text-align: left;
  }

  h2,
  h1 {
    font-family: "IBM Plex Mono", monospace;
  }

  h1,
  p {
    width: 70%;
  }

  h2 {
    color: var(--green);
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: Bold;
    line-height: 1.95rem;
  }

  h1 {
    color: var(--light);
    font-style: normal;
    font-weight: 600;
    font-size: 4rem;
    line-height: 5.2rem;
    margin-bottom: 2rem;
  }

  p {
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 2.55rem;
  }
`;
