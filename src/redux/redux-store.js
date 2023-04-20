import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";

const redusers = combineReducers({
  profilepage: profileReduser,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
});

let store = legacy_createStore(redusers);
