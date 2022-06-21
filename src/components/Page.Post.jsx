import React from "react";
import { Link, useParams } from "react-router-dom";
import css from "./Page.Post.module.css";
import { timestampToDate } from "./helpers";

function Button() {
  const { id } = useParams();
  return (
    <Link to={`/create-comment/${id}`} className="Button light mb">
      Nouveau commentaire
    </Link>
  );
}

export default function ({ token }) {
  const { id } = useParams();
  const [topic, setTopic] = React.useState({});
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:8080/api/topic/${id}`)
      .then((data) => data.json())
      .then(({ topic, comments }) => {
        setTopic(topic);
        setComments(comments || []);
      });
  }, []);

  return (
    <div className="Page">
      <header>
        <h1>{topic.title}</h1>
      </header>
      {token && <Button />}
      <main className={css.Main}>
        <h2 className="mb">{topic.title}</h2>
        <div>
          Par {topic.userName}, le {timestampToDate(topic.createdAt)}
        </div>
        <p dangerouslySetInnerHTML={{ __html: topic.text }}></p>
      </main>
      {comments.map((comment, key) => {
        return (
          <section key={key} className={css.Section}>
            <h3>
              Par {comment.userName}, le {timestampToDate(comment.createdAt)}
            </h3>
            <p>{comment.text}</p>
          </section>
        );
      })}
    </div>
  );
}
