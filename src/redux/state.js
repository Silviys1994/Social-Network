let rerenderEntireTree = () => {
  console.log("state changed");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "It`s my first post", likesCount: 11 },
    ],
    newPostText: "yo, hi",
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Andrey",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/590px-June_odd-eyed-cat.jpg",
      },
      {
        id: 2,
        name: "Oleg",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/590px-June_odd-eyed-cat.jpg",
      },
      {
        id: 3,
        name: "Vlad",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/590px-June_odd-eyed-cat.jpg",
      },
    ],
    messages: [
      {
        id: 1,
        message: "Hi",
      },
      {
        id: 2,
        message: "Yo",
      },
      {
        id: 3,
        message: "Nani?",
      },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
