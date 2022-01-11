import { Link } from "react-router-dom";
import { BlogFilter } from "../../components/BlogFilter";
import { Logic_SearchPage } from "./Logic_SearchPage";
export const SearchPage = (props) => {
  const {
    loading,
    postQuery,
    latest,
    setSearchParams,
    posts,
    startsFrom
  } = Logic_SearchPage();
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>Posts</h1>
          <BlogFilter
            postQuery={postQuery}
            latest={latest}
            setSearchParams={setSearchParams}
          ></BlogFilter>
          {posts
            .filter(
              (post) => post.title.includes(postQuery) && post.id >= startsFrom
            )
            .map((post) => {
              return (
                <Link key={post.id} to={`/posts/${post.id}`}>
                  <div>{post.title}</div>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};
