import React from 'react';
import { shallow } from 'enzyme';
import PostCard from './PostCard';

let post = { 
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

let comments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
]

let wrapped = shallow(<PostCard post={post} comments={comments} />);
let title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
let body = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";

describe('PostCard', () => {
  it('should render the PostCard Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the Titles children', () => { 
    expect(wrapped.find('[testId="postTitle"]').text()).toEqual(title);
  });

  it('renders the body children', () => { 
    expect(wrapped.find('[testId="postBody"]').text()).toEqual(body);
  });
});
