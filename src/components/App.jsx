import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getCookie } from "./helpers";
import Header from "./Header";
import PageHome from "./Page.Home";
import PageRegister from "./Page.Register";
import PageLogin from "./Page.Login";
import PageCreateTopic from "./Page.CreateTopic";
import PagePost from "./Page.Post";
import PageCreateComment from "./Page.CreateComment";

export default function App() {
  const [token, setToken] = React.useState(getCookie("token"));
  const [userName, setUserName] = React.useState(getCookie("userName"));

  return (
    <BrowserRouter>
      <Header
        token={token}
        setToken={setToken}
        userName={userName}
        setUserName={setUserName}
      />
      <Routes>
        <Route path="/" element={<PageHome token={token} />} />
        <Route
          path="/login"
          element={<PageLogin setToken={setToken} setUserName={setUserName} />}
        />
        <Route path="/register" element={<PageRegister />} />
        <Route
          path="/create-topic"
          element={<PageCreateTopic token={token} />}
        />
        <Route path="/topic/:id" element={<PagePost token={token} />} />
        <Route
          path="/create-comment/:id"
          element={<PageCreateComment token={token} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
