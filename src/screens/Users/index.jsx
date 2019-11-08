import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';

export class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
   /*  componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        const response = await fetch('http://localhost:4000/api/usersForm');
        const users = await response.json();
        this.setState({ users })
    } */

    render() {
        const { users } = this.state;

        return (
            <div>
                <Header />
                <Sidenav />

                <div className="mt-5 container">
                    <div className="table-responsive">
                        <table className="table table-striped table-sm mt-5">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Id</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.numberDocument}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;
