import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';
import axios from 'axios';

export class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      AllUsersConfirmed: []
    }
  }

  async componentDidMount() {
    const responseAllUsersConfirmed = await axios.get('http://localhost:4000/api/getAppointments/appointments');

    this.setState({
      AllUsersConfirmed: responseAllUsersConfirmed.data.appointments
    });
    // console.log(this.state.AllUsersConfirmed);
  }

  render() {
    return (
      <div>
        <Header />
        <Sidenav />
        <div className="container text-center mt-5">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Tipo Documento</th>
                <th scope="col">Numero Documento</th>
                <th scope="col">Nombre Completo</th>
                <th scope="col">Correo Electronico</th>
                <th scope="col">Barrio</th>
                <th scope="col">Direccion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Tipo Material</th>
                <th scope="col">Solicitud</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.AllUsersConfirmed.map(usersConfirmed => {
                return (
                  <tr key={usersConfirmed.id}>
                      <td>{usersConfirmed.typeDocument}</td>
                      <td>{usersConfirmed.numberDocument}</td>
                      <td>{usersConfirmed.fullName}</td>
                      <td>{usersConfirmed.email}</td>
                      <td>{usersConfirmed.neighborhood}</td>
                      <td>{usersConfirmed.addressHome}</td>
                      <td>INCLUIR</td>
                      <td>INCLUIR</td>
                      <td><button type="button" className="btn btn-outline-success btn-ln">Confirmado</button></td>
                  </tr>)})
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default index;