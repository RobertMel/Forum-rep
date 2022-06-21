import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setToken, setUserName }) {
  const navigate = useNavigate();
  const email = React.useRef();
  const password = React.useRef();

  const login = async () => {
    const data = await fetch("http://localhost:8084/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    });

    const json = await data.json();
    const tokenCookie = `token=${json.token}; SameSite=None; Secure`;
    const userNameCookie = `userName=${json.userName}; SameSite=None; Secure`;
    document.cookie = tokenCookie;
    document.cookie = userNameCookie;
    setToken(json.token);
    setUserName(json.userName);
    navigate("/");
  };

  return (
    <div className="Page">
      <header>
        <h1>Connexion</h1>
      </header>
      <main className="CenteredBox">
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="text"
          ref={email}
          defaultValue="tao@local.com"
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          id="password"
          type="password"
          ref={password}
          defaultValue="tao"
        />
        <button onClick={login} className="Button mb">
          Se connecter
        </button>
        <Link to="/register" className="white">
          Pas de compte ?
        </Link>
      </main>
    </div>
  );
}
