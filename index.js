//this code shows how the normal fetch function works and an api call works with json response
//this is the simple way promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

//for error handling use .catch(err=> clg(error))

////////////////////////////////////////////////////////////////////////////////////////////////////
//this code shows  how to crate a async function

const AsyncFunction = async () => {
  //the async syntax is required before the function expression
  //so we can access the await keyword that await for the response
  //the code after the await will run then only the remaining code will runs
  //when the code exicuted eg like fetch then it will run the remaining code
  UsersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await UsersResponse.json();
  const secondUser = users[0];
  console.log(secondUser);
  const postResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
  );
  const posts = await postResponse.json();
  console.log(posts);
};
////////////////////////////////////////////////////////////////////////////////////////////////////
//to do error Handling in  asyc await we use try catch

try {
  //try block the code that what should run
} catch (err) {
  //error handling
}

///////////////////////////////////////////////////////////////////////////////////////////////////
const AsyncFunction2 = async () => {
  try {
    UsersResponse = await fetch("https://jsonplacehoder.typicode.com/users");
    users = await UsersResponse.json();
    const secondUser = users[0];
    console.log(secondUser);
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
    );
    const posts = await postResponse.json();
    console.log(posts);
  } catch (err) {
    console.log("this was an error" + err);
  }
};
