import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  padding-bottom: 100px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

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
    font-size: 24px;
    margin-bottom: 12px;
    font-weight: Bold;
    line-height: 31.2px;
  }

  h1 {
    color: var(--light);
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 83.2px;
    margin-bottom: 32px;
  }

  p {
    color: var(--gray);
    font-size: 24px;
    line-height: 40.8px;
  }
`;
