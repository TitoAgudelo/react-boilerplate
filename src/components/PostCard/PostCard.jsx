import React from "react";
import styled from "styled-components";

const PostCard = ({ post, comments }) => {
  return (
    <Container>
      <Title testId="postTitle">{post.title}</Title>
      <Body testId="postBody">{post.body}</Body>
      <SubTitle>Comments:</SubTitle>
      {comments.map((comment, index) => {
        if (comment.postId === post.id) {
          return (
            <CommentContainer key={`comment-${index}`}>
              <CommentTitle>{comment.body}</CommentTitle>
              <CommentText>By: {comment.name} - Email: {comment.email}</CommentText>
            </CommentContainer>
          )
        }
      })}
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.red };
  font-family: 'Macho SemiBold';
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  padding: 1rem 0 0 5px;
  text-decoration: none;
  text-transform: capitalize;
`;

const Body = styled.p`
  color: ${({ theme: { colors } }) => colors.blue };
  font-family: 'Macho Regular';
  font-size: 12px;
  margin: 0;
  margin-bottom: 1rem;
  padding: 5px;
  text-transform: none;
  text-transform: capitalize;
`;

const SubTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho SemiBold';
  font-size: 12px;
  margin: 0;
  padding: 5px;
  text-transform: none;
  text-transform: capitalize;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;;
`;

const CommentTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho SemiBold';
  font-weight: bold;
  font-size: 10px;
  margin: 0;
  padding: 5px;
  text-decoration: none;
  text-transform: capitalize;
`;

const CommentText = styled.p`
  color: ${({ theme: { colors } }) => colors.blue };
  font-family: 'Macho Regular';
  font-size: 8px;
  margin: 0;
  margin-bottom: .5rem;
  padding: 5px;
  text-transform: none;
  text-transform: capitalize;
`;

export default PostCard;
