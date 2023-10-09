import "./App.css";
import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { SuccessScreen } from "./SuccessScreen";

function App() {
  const [success, setSuccess] = useState(false);

  const submitHandler = ({ username, password }) => {
    // send these to the server or whatever you want to do
    console.log({ username, password });
    setSuccess(true);
  };

  return (
    <main className="App">
      {success ? (
        <SuccessScreen setSuccess={setSuccess} />
      ) : (
        <SignUpForm submitHandler={submitHandler} />
      )}
    </main>
  );
}

export default App;
