import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 5rem 1.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 660px) {
    padding: 2.5rem 1.25rem 2.5rem 1.25rem;
    align-items: center;
    justify-content: center;

    img {
      padding-bottom: 1.875rem;
    }
  }

  img {
    width: 100%;
    max-width: 250px;
  }

  a,
  button {
    text-transform: uppercase;
    font-family: "DM Sans", sans-serif;
    color: var(--light);
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 3.75rem;

    @media (max-width: 480px) {
      gap: 1.25rem;
    }
  }

  a {
    font-size: 1.06rem;
    line-height: 1.38rem;
    text-decoration: none;
  }

  button {
    font-size: 0.93rem;
    line-height: 1.22rem;
    background: transparent;
    padding: 1.25rem 1.875rem;
    border: 1px solid #873eff;

    @media (max-width: 460px) {
      padding: 1.25rem 0.875rem;
    }
  }
`;
