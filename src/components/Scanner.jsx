import React from "react";
import Quagga from "quagga";
//import { Link } from "react-router-dom";
import "../styles/Scanner.css";

class Scanner extends React.Component {
  componentDidMount() {
    let _scannerIsRunning = false;
    function startScanner() {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            constraints: {
              width: "790",
              height: "490"
            },
            numberOfWorkers: navigator.hardwareConcurrency,
            target: document.querySelector("#scanner") // Or '#yourElement' (optional)
          },
          decoder: {
            readers: [
              "code_128_reader",
              "upc_reader",
              "upc_e_reader",
              "ean_reader",
              "ean_8_reader",
              "code_39_reader",
              "code_39_vin_reader",
              "codabar_reader"
            ]
          },
          locate: true
        },
        function(err) {
          if (err) {
            console.log(err);
            return;
          }
          Quagga.start();
        }
      );
      _scannerIsRunning = true;
    }
    Quagga.onDetected(data => {
      console.log(data);
      document.querySelector("#codigo").innerHTML = data.codeResult.code;
    });
    document.querySelector("#btnStart").addEventListener("click", () => {
      startScanner();
    });
    document.querySelector("#btnStop").addEventListener("click", () => {
      if (_scannerIsRunning) {
        Quagga.stop();
      } else {
        return (_scannerIsRunning = false);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Escanear Producto</h1>
        <div id="codigo" className="p-4"></div>
        <div id="scanner" className="p-4"></div>
        <div id="btnRegresar">
          <button id="btnStart" type="submit" className="btn btn-success">
            Iniciar
          </button>
          <button
            id="btnStop"
            type="submit"
            className="btn btn-success ml-2 stop"
          >
            Detener
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Scanner;
