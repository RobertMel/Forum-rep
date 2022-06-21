import React from "react";
import { Link } from "react-router-dom";
import { timestampToDate } from "./helpers";

function Button() {
  return (
    <Link to="/create-topic" className="Button light mb">
      Nouveau sujet
    </Link>
  );
}

export default function ({ token }) {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/api/topics")
      .then((data) => data.json())
      .then((json) => setRows(json || []));
  }, []);

  return (
    <div className="Page">
      <header>
        <h1>Bienvenue sur le forum !</h1>
      </header>
      <main>
        {token && <Button />}
        <table>
          <thead>
            <tr>
              <th>Sujet</th>
              <th>Réponses</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, key) => {
              return (
                <tr key={key}>
                  <td>
                    <Link to={`/topic/${row.id}`}>
                      <h3 dangerouslySetInnerHTML={{ __html: row.title }}></h3>
                      <div>
                        Par {row.userName}, le {timestampToDate(row.createdAt)}
                      </div>
                    </Link>
                  </td>
                  <td>{row.answers}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
