import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';
import axios from 'axios';

export class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            AllUsersRegistered: []
        }
    }

    async componentDidMount(){
        const responseAllUsersRegistered = await axios.get('http://localhost:4000/api/getUser/users');
        
        this.setState({
            AllUsersRegistered: responseAllUsersRegistered.data.users
        })
        // console.log(this.state.AllUsersRegistered);
    }

    render() {
        return (
            <div>
                <Header />
                <Sidenav />

                <div className="mt-5 container">
                    <div className="table-responsive">
                        <table className="table table-striped table-sm mt-5">
                            <thead>
                                <tr>
                                    <th>Numero Documento</th>
                                    <th>Nombre Completo</th>
                                    <th>Correo Electronico</th>
                                    <th>Fecha Registro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.AllUsersRegistered.map( users => {
                                        return (
                                            <tr key={users.id}>
                                                <td>{users.numberDocument}</td>
                                                <td>{users.fullName}</td>
                                                <td>{users.email}</td>
                                                <td>{users.created_at}</td>
                                            </tr>)})
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;