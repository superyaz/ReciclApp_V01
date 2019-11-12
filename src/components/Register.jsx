import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../styles/Login.css'

class Register extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           typeDocuments: [],
           neighborhoods: [],
           typeHouses: [],

           /* Valor Inicial de cada name, para enviar al backend */
           fullName: '',
           numberDocument: '',
           mobilePhone: '',
           email: '',
           password: '',
        //    confirmPassword: '',
           addressHome: '',
           membersHome: '',
           typeDocument: '',
           neighborhood: '',
           typeHouse: '',
       }
    }

    async componentDidMount() {
        const responseTypeDocuments = await axios.get('http://localhost:4000/api/registerUser/typeDocuments');
        const responseNeighborhoods = await axios.get('http://localhost:4000/api/registerUser/neighborhoods');
        const responseTypeHouses = await axios.get('http://localhost:4000/api/registerUser/houses');

        this.setState({
            typeDocuments: responseTypeDocuments.data.documents,
            typeDocument: responseTypeDocuments.data.documents[0].id,

            neighborhoods: responseNeighborhoods.data.neighborhoods,
            neighborhood: responseNeighborhoods.data.neighborhoods[0].id,

            typeHouses: responseTypeHouses.data.houses,
            typeHouse: responseTypeHouses.data.houses[0].id
        });
    }

    onSelectAndInputChange = (eventObject) => {
        this.setState({
            [eventObject.target.name]: eventObject.target.value
        })
        // console.log(eventObject.target.name, eventObject.target.value);
        // console.log(this.state.typeDocument);
        // console.log(this.state.neighborhoods);
    }

    onSubmit = async (eventObject) => {
        eventObject.preventDefault();
        
        /* Enviando la data al backend */
        const tableUsers = {
            fullName: this.state.fullName,
            numberDocument: this.state.numberDocument,
            mobilePhone: this.state.mobilePhone,
            email: this.state.email,
            password: this.state.password,
            // confirmPassword: this.state.confirmPassword,
            addressHome: this.state.addressHome,
            membersHome: this.state.membersHome,
            document_id: this.state.typeDocument,
            neighborhood_id: this.state.neighborhood,
            house_id: this.state.typeHouse
        }

        this.setState({
            fullName: '',
            numberDocument: '',
            mobilePhone: '',
            email: '',
            password: '',
            // confirmPassword: '',
            addressHome: '',
            membersHome: ''
        });

        await axios.post('http://localhost:4000/api/registerUser/createUser', tableUsers);
        // await axios.post('http://localhost:4000/api/authentication/signup', tableUsers);
    }

    render(){
        return(
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col overflow-auto">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-4">
                                <Link to='/'>
                                    <img src="../../document/logo.jpg" className="logo" alt=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 d-flex mb-4 align-items-center justify-content-center title">
                                <h3>Formulario de Registro</h3>
                            </div>
                        </div>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group row">
                                <div className="col-12">
                                    <h6>Nombre Completo</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.fullName} type="text" className="form-control" name="fullName" placeholder="Nombre Completo" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Tipo de Documento</h6>
                                    <select onChange={this.onSelectAndInputChange} name="typeDocument" className="form-control" required>
                                        {
                                            this.state.typeDocuments.map(typeDocument => 
                                            <option key={typeDocument.id} value={typeDocument.id}>
                                                {typeDocument.typeDocument}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6>Número de Documento</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.numberDocument} type="text" className="form-control" name="numberDocument" placeholder="Numero de Documento" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <h6>Correo Electronico</h6>
                                <input onChange={this.onSelectAndInputChange} value={this.state.email} type="email" className="form-control" name="email" placeholder="Email" required/>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-12">
                                    <h6>Contraseña</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.password} type="password" className="form-control" name="password" placeholder="Contraseña" id="" required/>
                                </div>
                                {/* <div className="col-12 col-md-6">
                                    <h6>Confirmar Contraseña</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.confirmPassword} type="password" className="form-control" name="confirmPassword" placeholder="Confirmar Contraseña" required/>
                                </div> */}
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Número de Teléfono Móvil</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.mobilePhone} type="text" className="form-control" name="mobilePhone" placeholder="Número de Teléfono Móvil" required/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6>Dirección de Residencia</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.addressHome} type="text" className="form-control" name="addressHome" placeholder="Dirección de Residencia"required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Barrio</h6>
                                    <select onChange={this.onSelectAndInputChange} type="text" name="neighborhood" className="form-control" required>
                                        {
                                            this.state.neighborhoods.map(neighborhood => 
                                            <option key={neighborhood.id} value={neighborhood.id}>
                                                {neighborhood.neighborhood}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6>Tipo de Vivienda</h6>
                                    <select onChange={this.onSelectAndInputChange} type="text" name="typeHouse" className="form-control" required>
                                        {
                                            this.state.typeHouses.map(house => 
                                            <option key={house.id} value={house.id}>
                                                {house.typeHouse}
                                            </option>)
                                        }
                                    </select> 
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-4">
                                    <h6>Número de Residentes</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.membersHome} type="text" className="form-control" name="membersHome" placeholder="Tipo de Vivienda" required/>
                                </div>
                            </div>

                            <div className="form-group row d-flex justify-content-center mt-3 mb-5">
                                <button type="submit" className="form-control btn btn-lg btn-registrarse" name="registrarse">Registrarse</button>
                                {/* <Link to="">
                                </Link> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Register;