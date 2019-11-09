import React from "react";
import { Link } from "react-router-dom";
import "../styles/Scanner.css";

class Scanner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="scanner">
          <h1>Espacio para el scanner</h1>
          <Link to="/Home">
            <button type="submit" className="btn btn-success">
              Regresar
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Scanner;
