let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  callSubscriber() {
    console.log("state changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
// export const ;
// window.store = store;
export default store;
