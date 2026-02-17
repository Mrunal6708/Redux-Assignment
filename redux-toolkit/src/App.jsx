import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./userSlice";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Example</h1>
      <h2>Name: {user.name}</h2>
      <h3>Status: {user.isLoggedIn ? "Logged In" : "Logged Out"}</h3>

      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default App;
