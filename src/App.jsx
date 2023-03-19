import { useState } from "react";
import "./App.css";
import Calendar from "./modules/Calendar";
import Test from "./modules/test";
import Login from "./modules/Login";
import Register from "./modules/Register";
import userService from "./services/userService";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(0);

  const registerHandler = async (credentials) => {
    try {
      userService.register(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (credentials) => {
    try {
      userService.login(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Login loginHandler={loginHandler} />
      <Register registerHandler={registerHandler} />
      <Calendar year="2023" month="3" />
    </div>
  );
}

export default App;
