import { createStore, legacy_createStore } from "redux";
import { AppReducer } from "./AppReducer";

const AppStore = createStore(AppReducer)//legacy_createStore(AppReducer)

export default AppStore