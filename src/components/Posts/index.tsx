import style from "./main.module.scss";
import { BsHeart } from "react-icons/bs";

interface PropsPosts {
  title: string;
  description: string;
  date: string;
}

export const Posts = ({ title, description, date }: PropsPosts) => {
  return (
    <div className={style.MContainer}>
      <div className={style.Card}>
        <div className={style.Info}>
          <span>{date}</span>
          <span>
            <BsHeart size={24} color={`#574AE8`} />
          </span>
        </div>
        <div className={style.Text}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
