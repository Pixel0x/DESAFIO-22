import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  padding: 100px 0 30px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Infos = styled.div`
  font-family: "IBM Plex Mono", monospace;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  display: flex;
  gap: 48px;
  color: var(--gray);

  a {
    text-decoration: none;
    color: var(--gray);
  }
`;
