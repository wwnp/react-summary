import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { delay } from "../../auxillary";
export function Logic_SearchPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");
  const startsFrom = latest ? 99 : 1;
  useEffect(() => {
    // setLoading(true);
    delay(500).then(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
      setLoading(false);
    });
  }, []);
  return {
    loading,
    postQuery,
    latest,
    setSearchParams,
    posts,
    startsFrom
  };
}
