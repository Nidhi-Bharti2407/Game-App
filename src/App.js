import axios from "axios";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("search game");

  const [game, setGame] = useState([]);

  const changeText = (event) => {
    setText(event.target.value);
  };

  const getGame = (e) => {
    e.preventDefault();

    axios
      .get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`)
      .then((response) => {
        console.log(response);
        setGame(response.data.Search);
      });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
          <a className="navbar-brand text-light" href="#">
            Game App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={getGame}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={changeText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          {game.map((value, index) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{value.title}</h4>
                    <h4 className="card-text">{value.platform} </h4>
                    <h4 className="card-text">{value.score} </h4>
                    <h4 className="card-text">{value.genre} </h4>
                    <h4 className="card-text">{value.editors_choice} </h4>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
