import React, { useEffect } from "react";
import styled from "styled-components";

import { useStatePosts, useSetPosts } from "../../providers/PostsProvider/PostsProvider";
import PostCard from "../PostCard/PostCard";

const Posts = () => {
  const { posts, comments } = useStatePosts();
  const { initPosts } = useSetPosts();

  useEffect(() => {
    initPosts();
  }, [posts])

  return (
    <PostsContainer>
      { posts.length && comments.length && posts.map((post, index) => 
        <PostCard post={post} comments={comments} key={index} />)
      }
    </PostsContainer>
  )
}

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 3rem 0;
`;

export default Posts;
