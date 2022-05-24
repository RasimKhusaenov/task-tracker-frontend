import React from "react";
import Header from "../components/Header";
import AuthorizationForm from "../components/AuthorizationForm";


export default function Login() {
  return (
    <div className="Login">
      <Header>
        Login Page
      </Header>
      <AuthorizationForm/>
    </div>
  );
}
