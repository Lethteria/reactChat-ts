import React from 'react';
import LoginFormPage from "./pages/homePage";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {selectAuthUser} from "./app/reducers/authUserReducer";
import ChatPage from "./pages/chatPage";

function App() {

  const user = useTypedSelector(selectAuthUser)

  return user.isLoggedIn ? (
          <ChatPage />
      )
  : (
    <div className="App">
      <LoginFormPage />
    </div>
  );
}

export default App;
