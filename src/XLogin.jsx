import React, { useState } from "react";

function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password) {
      setMessage("Both fields are required");
      return;
    }

    // Credential Check
    if (username === "user" && password === "password") {
      setFormSubmit(true);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      {message && <p>{message}</p>}
      {!formSubmit ? (
        <form onSubmit={handleSubmit}>
          <h2>XLogin</h2>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
}

export default XLogin;
