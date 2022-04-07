import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import "./App.scss";

import posts from "./posts.json";

export const App = () => {
  return (
    <>
      <Header />
      <div className="AreaPost">
        {posts.map((post, index) => (
          <Posts
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </>
  );
};
