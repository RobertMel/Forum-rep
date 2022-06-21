import { Link, useNavigate } from "react-router-dom";

import { deleteCookies } from "./helpers";

import css from "./Header.module.css";

function AuthenticatedNavigation({ setToken, userName, setUserName }) {
  const navigate = useNavigate();

  function logout() {
    deleteCookies();
    setToken();
    setUserName();
    navigate("/");
  }

  return (
    <div className="flex">
      <div>{userName}</div>
      <button className="Button" onClick={logout}>
        Se déconnecter
      </button>
    </div>
  );
}

function DefaultNavigation() {
  return (
    <div className="flex">
      <Link to="/login" className="Button">
        Se connecter
      </Link>
      <Link to="/register" className="Button">
        S'enregistrer
      </Link>
    </div>
  );
}

export default function Header({ token, setToken, userName, setUserName }) {
  return (
    <nav className={css.Header}>
      <Link to="/" className={css.Title}>
        Forum
      </Link>
      {token ? (
        <AuthenticatedNavigation
          setToken={setToken}
          userName={userName}
          setUserName={setUserName}
        />
      ) : (
        <DefaultNavigation />
      )}
    </nav>
  );
}
