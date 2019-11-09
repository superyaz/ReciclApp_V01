import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/RegisterMaterial.css'


class RegisterMaterial extends React.Component{
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
                            <div className="col-12 mb-4 d-flex justify-content-center p-3">
                                <Link to=''>
                                    <img src="../../document/logo.jpg" className="logo" alt=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-12 d-flex mb-4 align-items-center justify-content-center title">
                                <h3>Registro de Materiales</h3>
                            </div>
                        </div>
                          <form>
                            <div className="form-group row">
                                <div className="col-12">
                                    <h6>Seleccione tipo de material</h6>
                                    <select  name="typeMaterial" typeof="text" className="form-control" required>
                                        <option value="">Vidrio</option>    
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Cantidad de productos correspondiente al material seleccionado</h6>
                                    <select  name="quantityofproducts" typeof="number" className="form-control" required>
                                        <option value="">1</option>    
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-center mt-3 mb-5">
                                <Link to="/List">
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

export default RegisterMaterial;