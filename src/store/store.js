import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/language"
import counterReducer from "./slices/counter"
import userNameReducer from "./slices/userName"
import loaderReducer from "./slices/loader"


const store =configureStore({

  reducer:{
    language: languageReducer,
    counter: counterReducer,
    userName:userNameReducer,
    loader:loaderReducer
  }
  //language :{language:en}
  //counter:{counter:0}
})
export default store
