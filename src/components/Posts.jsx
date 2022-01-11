import { Post } from "./Post";
export function Posts(props) {
  return props.posts.map((item) => {
    return <Post key={item.id} name={item.title} cb={props.cb} id={item.id} />;
  });
}
