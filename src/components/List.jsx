import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/List.css'



class List extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row mb-4 d-flex justify-content-center p-3">
                                <Link to='/RegisterMaterial'>
                                    <img src="../../document/logo.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="row">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Codigo de Barra</th>
                                            <th className="text-center">Material</th>
                                            <th className="text-center">Cantidad</th>
                                            <th className="text-center">Agregar</th>
                                            <th className="text-center">Eliminar</th>
                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th className="text-center"></th>
                                            <th className="text-center">vidrio</th>
                                            <th className="text-center">10</th>
                                            <th className="text-center"><button type="submit" className="btn btn-editar">Agregar</button></th>

                                            <th className="text-center"><button type="submit" className="btn btn-eliminar">Eliminar</button></th>
                                        </tr>
                                        <tr>
                                            <th className="text-center">1</th>
                                            <th className="text-center">vidrio</th>
                                            <th className="text-center">10</th>
                                            <th className="text-center"><button type="submit" className="btn btn-editar">Agregar</button></th>

                                            <th className="text-center"><button type="submit" className="btn btn-eliminar">Eliminar</button></th>
                                        </tr>
                                    
                                    </tbody>
                                </table> 
                            </div>
                            <div className="row d-flex justify-content-center mt-5"><button type="submit" className="btn btn-lg">Culminado</button></div>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
}

export default List;