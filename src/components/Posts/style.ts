import styled from "styled-components";

export const SectionPost = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px 26px;
`;

export const Post = styled.div`
  max-width: 600px;
  background: var(--dark-200);
  border-radius: 8px;
  border: 1px solid var(--purple);

  img {
    width: 100%;
    border-radius: 4px;
  }

  h4 {
    font-family: "IBM Plex Mono", monospace;
    font-size: 24px;
    line-height: 31.2px;
    font-weight: 500;
    padding: 20px 0;
    color: var(--light);
  }

  p {
    font-size: 18px;
    line-height: 30.6px;
    font-weight: 500;
    color: var(--gray);
    padding-bottom: 40px;
    font-family: "DM Sans", sans-serif;
  }
`;

export const PostContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;

  button {
    text-transform: uppercase;
    font-size: 15px;
    line-height: 19.53px;
    font-weight: 700;
    padding: 10px 50px;
    border-radius: 4px;

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
