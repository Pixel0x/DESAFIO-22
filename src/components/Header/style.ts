import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px 20px;
  display: flex;
  justify-content: space-between;

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
    gap: 60px;
  }

  a {
    font-size: 17px;
    line-height: 22.13px;
    text-decoration: none;
  }

  button {
    font-size: 15px;
    line-height: 19.53px;
    background: transparent;
    padding: 20px 30px;
    border: 1px solid #873eff;
  }
`;
