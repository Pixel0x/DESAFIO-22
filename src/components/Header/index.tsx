import logoImg from "../../assets/logo.svg";
import { Header, Container } from "./style";

export const CHeader = () => {
  return (
    <Header>
      <Container>
        <img src={logoImg} />
        <div>
          <a href="#">MEU GITHUB</a>
          <button>ENTRAR NA COMUNIDADE</button>
        </div>
      </Container>
    </Header>
  );
};
