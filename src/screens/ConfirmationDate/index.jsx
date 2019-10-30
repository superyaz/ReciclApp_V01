import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';

export class index extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Sidenav />
        <div className="container text-center mt-5">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha</th>
                <th scope="col">Direccón</th>
                <th scope="col">Solicitud</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>08-06-2020</td>
                <td>149 15ºG</td>
                <td><button type="button" className="btn btn-outline-success btn-ln">Confirmar</button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>04-09-2020</td>
                <td>261A 6ºB</td>
                <td><button type="button" className="btn btn-outline-success">Confirmar</button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>09-02-2020</td>
                <td>261A 6ºB</td>
                <td><button type="button" className="btn btn-outline-success">Confirmar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default index;