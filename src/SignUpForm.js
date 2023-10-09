import { useState } from "react";
import { ControlledInput } from "./ControlledInput";

export function SignUpForm({ submitHandler }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordsLength = password.length && confirmPassword.length;
  const passwordsMatch = password === confirmPassword;
  const notEmpty = [username, password].reduce(
    (acc, value) => acc && value.length,
    true,
  );
  let showMessage = false;
  let messageType = "";
  let message = "";

  if (passwordsLength && passwordsMatch) {
    showMessage = true;
    messageType = "success";
    message = "Passwords match!";
  }

  if (passwordsLength && !passwordsMatch) {
    showMessage = true;
    messageType = "error";
    message = "Passwords do not match.";
  }

  const handler = (setterFn) => (e) => {
    e.preventDefault();
    setterFn(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    submitHandler({ username, password });
  };
  return (
    <>
      <header className="App-header">
        <h1>Sign Up Form</h1>
      </header>
      <form className="container" onSubmit={formSubmitHandler}>
        <ControlledInput
          type="text"
          label="Username"
          value={username}
          onChange={handler(setUserName)}
        />
        <div className={messageType}>
          <ControlledInput
            type="password"
            label="Password"
            value={password}
            onChange={handler(setPassword)}
            error={!passwordsMatch}
          />
          <ControlledInput
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={handler(setConfirmPassword)}
            error={!passwordsMatch}
          />
          {showMessage && (
            <p className={`text-${messageType} center`}>{message}</p>
          )}
        </div>
        <input
          className="submit"
          type="submit"
          value="Sign up"
          disabled={!(passwordsMatch && notEmpty)}
        />
      </form>
    </>
  );
}
