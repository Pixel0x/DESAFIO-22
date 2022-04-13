import styled from "styled-components";

export const SectionPost = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2.5rem;
`;

export const Post = styled.div`
  max-width: 550px;
  background: var(--dark-200);
  border-radius: 0.5rem;
  border: 1px solid var(--purple);

  img {
    width: 100%;
    border-radius: 0.25rem;
  }

  h4 {
    font-family: "IBM Plex Mono", monospace;
    font-size: 1.5rem;
    line-height: 1.95rem;
    font-weight: 500;
    padding: 1.25rem 0;
    color: var(--light);
  }

  p {
    font-size: 1.125rem;
    line-height: 1.9125rem;
    font-weight: 500;
    color: var(--gray);
    padding-bottom: 2.5rem;
    font-family: "DM Sans", sans-serif;
  }
`;

export const PostContainer = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.5rem;

  button {
    text-transform: uppercase;
    font-size: 0.9375rem;
    line-height: 1.22rem;
    font-weight: 700;
    padding: 0.625rem 3.125rem;
    border-radius: 0.25rem;

    &:first-child {
      color: var(--dark);
      background: var(--green);
    }

    &:last-child {
      color: var(--light);
      background: transparent;
      border: 1px solid var(--green);
    }
  }
`;
