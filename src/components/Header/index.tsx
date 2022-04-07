import style from "./header.module.scss";
import { BsSearch } from "react-icons/bs";

export function Header() {
  return (
    <div className={style.Header}>
      <div className={style.Container}>
        <div className={style.Nav}>
          <span>Codelândia</span>
          <span>blog</span>
        </div>
        <div className={style.Input}>
          <label htmlFor="inputSearch">
            <BsSearch size={24} color={`#fff`} title={`Search`} />
          </label>
          <input type="text" id="inputSearch" placeholder="Pesquisar no blog" />
        </div>
      </div>
    </div>
  );
}
