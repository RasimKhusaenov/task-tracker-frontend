import React, { useState } from 'react';
import styled from "styled-components";
import InputField from "./InputField";

const Form = styled.form`
  text-align: -webkit-center;
  padding-bottom: 2em;
`;

function AuthorizationForm(props) {
  const { action, method } = props;
  const [formState, setFormState] = useState({ login: "", password: "" });

  function onChangeField(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormState((currentState) => ({ ...currentState, [name]: value }))
  }

  function onBlurField(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormState((currentState) => ({ ...currentState, [name]: value.trim() }))
  }

  return (
    <Form action={action} method={method} id="authForm">
      <InputField
        fieldName="Login"
        inputType="login"
        placeholder="intern.internov@flatstack.dev"
        onChange={onChangeField}
        onBlur={onBlurField}
        value={formState.login}
      />
      <InputField
        fieldName="Password"
        inputType="password"
        placeholder="********"
        onChange={onChangeField}
        value={formState.password}
      />
      <input type="submit" value="Login" />
    </Form>
  );
}

export default AuthorizationForm;
