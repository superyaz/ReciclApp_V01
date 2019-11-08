import React from 'react'
import '../styles/Login.css'
import axios from 'axios'


class Login extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           email: '',
           password: ''
       }
    }

    onSubmit = async(eventObject) => {
        eventObject.preventDefault();
        
        /* Enviando la data al backend */
        const tableLoginUsers = {
            email: this.state.email,
            password: this.state.password
        }

        this.setState({
            email: '',
            password: ''
        });

        await axios.post('http://localhost:4000/api/authentication/signin', tableLoginUsers);
    }

    onInputChange = (eventObject) => {
        this.setState({
            [eventObject.target.name]: eventObject.target.value
        });
        // console.log(eventObject.target.name, eventObject.target.value);
    }

    render(){
        return(
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="../../document/logo.jpg" alt="" className=" logo mb-3"/>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input onChange={this.onInputChange} value={this.state.email} type="email" className="form-control" name="email" placeholder="Correo Electronico" required/>
                            </div>
                            <div className="form-group">
                                <input onChange={this.onInputChange} value={this.state.password} type="password" className="form-control" name="password" placeholder="Contraseña" required/>
                            </div>
                            <div className="form-group">
                                    <button type="submit" className="form-control btn btn-lg" name="button">Entrar</button>        
                            </div>
                            <div className="form-group">
                                <a href="/register" className="text-muted d-flex justify-content-center">¿Olvidaste la contraseña?</a>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
  
}

export default Login;