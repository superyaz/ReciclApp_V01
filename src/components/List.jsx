import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import '../styles/List.css'

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productsList: []
        }
    }

    async componentDidMount() {
        const responseProductsList = await axios.get('http://localhost:4000/api/product/listProducts');

        this.setState({
            productsList: responseProductsList.data.productsDB
        });
    }

    onSubmit = () => {
        console.log('HOLA SOY EL SUBMIT');
    }
    
    onClick = (eventObject) => {
        eventObject.preventDefault();
        this.onSubmit();
        this.props.history.push('/');
    }

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
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th className="text-center">111111</th>
                                            <th className="text-center">Carton</th>
                                            <th className="text-center">10</th>
                                            <th className="text-center"><button type="submit" className="btn btn-eliminar">Eliminar</button></th>
                                        </tr>
                                        <tr>
                                            <th className="text-center">222222</th>
                                            <th className="text-center">Plastico</th>
                                            <th className="text-center">10</th>
                                            <th className="text-center"><button type="submit" className="btn btn-eliminar">Eliminar</button></th>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div>
                            <div className="row d-flex justify-content-center mt-5"><button type="submit" className="btn btn-lg">Continuar</button></div>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
}

export default withRouter(List);