import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { getJwt } from '../helpers/jwt';
import '../styles/Instructive.css';

class Instructive extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const jwt = getJwt();

        if(!jwt){
            return this.props.history.push('/login');
        }

        axios.get('/products', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then(res => res.setState({
            user: res.data.user
            
        })).catch(err => {
            this.props.history.push('/login');
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row d-flex justify-content-center mb-2">
                                <Link to='/'>
                                    <img src="../../document/logo.jpg" alt="" className="logo mb-3" />
                                </Link>
                            </div> 

                            <div className="row d-flex justify-content-center mb-5">
                                <div className="col col-12">
                                    <h2 className=" mt-4 mb-4 d-flex justify-content-center">Bienvenido Eco-Ciudadano</h2>
                                    <p>Habiendo validado sus datos de inscripción le informamos que sólo la Fundación ReciclApp tendrá acceso a sus datos, los cuales se manejarán con la reserva que define la legislación de Colombia.</p>
                                    <p>En los proximos días se le hará llegar a su domicilio el KIT  de reciclaje que consta de:</p>
                                    <ul>
                                        <li className="ml-5">Bolsa para el almacenamiento de materiales de reciclaje.</li>
                                        <li className="ml-5">Pad magnético con el instructivo resumido de separación y clasificación de reciclaje</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row justify-content-center mb-4">
                                <Link to='/RegisterMaterial'>
                                    <button type="submit" className="form-control btn btn-lg btn-register-material" name="RegisterMaterial">Registro de Material</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}

export default withRouter(Instructive);