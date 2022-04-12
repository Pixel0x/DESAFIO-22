import { CHeader as Header } from "./components/Header";
import { CMain as Main } from "./components/Main";
import { CPosts as Posts } from "./components/Posts";
import { CFooter as Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Posts />
      <Footer />
      <GlobalStyle />
    </>
  );
};
