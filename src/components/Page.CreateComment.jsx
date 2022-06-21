import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ({ token }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const text = React.useRef();

  const createComment = async () => {
    await fetch("http://localhost:8080/api/create-comment", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        topicId: id,
        text: text.current.value,
      }),
    });

    navigate("/");
  };

  return (
    <div className="Page">
      <header>
        <h1>Nouveau commentaire</h1>
      </header>
      <main className="CenteredBox">
        <label htmlFor="text">Texte :</label>
        <textarea id="text" ref={text} className="mb"></textarea>
        <button onClick={createComment} className="Button">
          Créer un nouveau commentaire
        </button>
      </main>
    </div>
  );
}
