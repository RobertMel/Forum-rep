import React from "react";

export default function () {
  const name = React.useRef("");
  const email = React.useRef("");
  const password = React.useRef("");
  const confirmation = React.useRef("");

  const register = async () => {
    const data = await fetch("http://localhost:8084/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        confirmation: confirmation.current.value,
      }),
    });
    window.location('/login')
    console.log(data);
  };

  return (
    <div className="Page">
      <header>
        <h1>Créer un compte</h1>
      </header>
      <main className="CenteredBox">
        <label htmlFor="name">Pseudo :</label>
        <input id="name" type="text" ref={name} />
        <label htmlFor="email">Email :</label>
        <input id="email" type="text" ref={email} />
        <label htmlFor="password">Mot de passe :</label>
        <input id="password" type="password" ref={password} />
        <label htmlFor="confirmation">Confirmation :</label>
        <input id="confirmation" type="password" ref={confirmation} />
        <button onClick={register} className="Button">
          S'enregistrer
        </button>
      </main>
    </div>
  );
}
