const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
  newMessageBody: "",
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [
          ...state.messages,
          {
            id: 6,
            message: body,
          },
        ],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReduser;
