import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Login section</h1>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Kishan",
              age: 34,
              email: "kishan@g.co",
            }),
            "test"
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
