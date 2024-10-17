import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    
    if (password !== rePassword) {
      setErrors((error) => [...error, "Passwords do not match"]);
    } else {
      if (password.length < 6) {
        setErrors((error) => [
          ...error,
          "Password should have a min length of 6 characters",
        ]);
      }
      if (password === password.toLowerCase()) {
        setErrors((error) => [
          ...error,
          "Password should have at least 1 uppercase character",
        ]);
      }
      if (password === password.toUpperCase()) {
        setErrors((error) => [
          ...error,
          "Password should have at least 1 lowercase character",
        ]);
      }
      if (password.match(/[0-9]/) === null) {
        setErrors((error) => [
          ...error,
          "Password should have at least 1 numeric charachter",
        ]);
      }
      if (password.match(/\W/) === null) {
        setErrors((error) => [
          ...error,
          "Password should have at least 1 special charachter",
        ]);
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Please Enter password below:</label>
        <br />
        <input
          id="password"
          type="text"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Password Again"
          onChange={(e) => setRePassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {errors?.map((item) => (
        <p key={item} style={{ color: "red" }}>
          {item}
        </p>
      ))}
      {!errors.length && (
        <p style={{ color: "green" }}>Password is valid</p>
      )}
    </div>
  );
}

export default App;
