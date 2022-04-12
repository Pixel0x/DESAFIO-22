import imgProject from "../../assets/imgProject.svg";
import { SectionPost, Container, Post, PostContainer, Buttons } from "./style";

export const CPosts = () => {
  return (
    <SectionPost>
      <Container>
        <Post>
          <PostContainer>
            <img src={imgProject} />
            <h4>Nome do Projeto</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              felis ligula, accumsan nec cursus in, eleifend sit amet dui.
            </p>
            <Buttons>
              <button>Demo</button>
              <button>Github</button>
            </Buttons>
          </PostContainer>
        </Post>

        <Post>
          <PostContainer>
            <img src={imgProject} />
            <h4>Nome do Projeto</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              felis ligula, accumsan nec cursus in, eleifend sit amet dui.
            </p>
            <Buttons>
              <button>Demo</button>
              <button>Github</button>
            </Buttons>
          </PostContainer>
        </Post>

        <Post>
          <PostContainer>
            <img src={imgProject} />
            <h4>Nome do Projeto</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              felis ligula, accumsan nec cursus in, eleifend sit amet dui.
            </p>
            <Buttons>
              <button>Demo</button>
              <button>Github</button>
            </Buttons>
          </PostContainer>
        </Post>

        <Post>
          <PostContainer>
            <img src={imgProject} />
            <h4>Nome do Projeto</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              felis ligula, accumsan nec cursus in, eleifend sit amet dui.
            </p>
            <Buttons>
              <button>Demo</button>
              <button>Github</button>
            </Buttons>
          </PostContainer>
        </Post>
      </Container>
    </SectionPost>
  );
};
