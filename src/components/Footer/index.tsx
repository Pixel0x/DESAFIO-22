import logoImg from "../../assets/minLogo.svg";
import { Container, Footer, Infos } from "./style";

export const CFooter = () => {
  return (
    <Footer>
      <Container>
        <img src={logoImg} alt="Logo" />

        <Infos>
          <span>© 2022 - Thiago Souza</span>
          <a href="#">Codelândia</a>
        </Infos>
      </Container>
    </Footer>
  );
};
