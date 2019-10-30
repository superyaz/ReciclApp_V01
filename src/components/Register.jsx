import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'

class Register extends React.Component{
    //constructor(props){
    //    super(props)
    //}

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

                        <form>
                            <div className="form-group row">
                                <div className="col-12">
                                    <h6>Nombre Completo</h6>
                                    <input type="text" className="form-control" name="fullName" placeholder="Nombre Completo" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Tipo de Documento</h6>
                                    <select  name="typeDocument" className="form-control" required>
                                        <option value=""></option>    
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6>Número de Documento</h6>
                                    <input type="text" className="form-control" name="numberDocument" placeholder="Numero de Documento" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <h6>Correo Electronico</h6>
                                <input type="email" className="form-control" name="email" placeholder="Email" required/>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Contraseña</h6>
                                    <input type="password" className="form-control" name="password" placeholder="Contraseña" id="" required/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6>Confirmar Contraseña</h6>
                                    <input type="password" className="form-control" name="password" placeholder="Confirmar Contraseña" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Número de Teléfono Móvil</h6>
                                    <input type="text" className="form-control" name="mobilePhone" placeholder="Número de Teléfono Móvil" required/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6>Dirección de Residencia</h6>
                                    <input type="text" className="form-control" name="addressHome" placeholder="Dirección de Residencia"required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Barrio</h6>
                                    <select type="text" name="neighborhood" className="form-control" required>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6>Tipo de Vivienda</h6>
                                    <select type="text" name="typeHouse" className="form-control" required>
                                        <option value=""></option>
                                    </select> 
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-4">
                                    <h6>Número de Residentes</h6>
                                    <input type="text" className="form-control" name="membersHome" placeholder="Tipo de Vivienda" required/>
                                </div>
                            </div>

                            <div className="form-group row d-flex justify-content-center mt-3 mb-5">
                                <Link to="/Confirmation">
                                    <button type="submit" className="form-control btn btn-lg btn-registrarse" name="registrarse">Registrarse</button>
                                </Link>
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