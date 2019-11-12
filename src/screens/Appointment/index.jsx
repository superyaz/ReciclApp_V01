import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';
import axios from 'axios';

export class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            AllUsersAppointments: []
        }
    }

    async componentDidMount() {
        const responseAllUsersAppointments = await axios('http://localhost:4000/api/getAppointments/appointments');

        this.setState({
            AllUsersAppointments: responseAllUsersAppointments.data.appointments
        });
        // console.log(this.state.AllUsersAppointments);
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
                        this.state.AllUsersAppointments.map(usersAppointment => {
                          return (
                            <tr key={usersAppointment.id}>
                                <td>{usersAppointment.typeDocument}</td>
                                <td>{usersAppointment.numberDocument}</td>
                                <td>{usersAppointment.fullName}</td>
                                <td>{usersAppointment.email}</td>
                                <td>{usersAppointment.neighborhood}</td>
                                <td>{usersAppointment.addressHome}</td>
                                <td>INCLUIR</td>
                                <td>INCLUIR</td>
                                <td><button type="button" className="btn btn-danger btn-ln">Pendiente</button></td>
                            </tr>)})
                      }
                      </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default index;