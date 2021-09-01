/**
 * Get Movies by query text
 * @param {*} query 
 */
export const getPosts = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const options = Object.assign({method: 'GET'})
  const request = new Request(url, options);
  
  try {
    const response = await fetch(request);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
    return err;
  }
};

export const getComments = async () => {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  const options = Object.assign({method: 'GET'})
  const request = new Request(url, options);
  
  try {
    const response = await fetch(request);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
    return err;
  }
};
