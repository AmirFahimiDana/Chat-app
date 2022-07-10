import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Login from "./components/Login";
import Chats from "./components/Chats";

//context
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
