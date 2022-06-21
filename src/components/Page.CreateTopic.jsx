import React from "react";

export default function ({ token }) {
  const title = React.useRef();
  const text = React.useRef();

  const createTopic = async () => {
    await fetch("http://localhost:8080/api/create-topic", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        title: title.current.value,
        text: text.current.value,
      }),
    });
    window.location('/')
  };

  return (
    <div className="Page">
      <header>
        <h1>Nouveau topic</h1>
      </header>
      <main className="CenteredBox">
        <label htmlFor="title">Titre :</label>
        <input id="title" type="text" ref={title} />
        <label htmlFor="text">Texte :</label>
        <textarea id="text" ref={text} className="mb"></textarea>
        <button onClick={createTopic} className="Button">
          Créer un nouveau sujet
        </button>
      </main>
    </div>
  );
}
