import React from "react";
import PostData from "./postData";

const PostLayout = props => {
  console.log("props are", props);
  const { location } = props;

  return <PostData postData={location.state.postData} />;
};
export default PostLayout;

/* 
previous method...
Loop through all posts, render only those that match the id from params

return posts.default.map(post =>
  post.id === postId ? (
    <PostData postData={post} key={`post-id-${postId}`} />
  ) : null
);
*/
