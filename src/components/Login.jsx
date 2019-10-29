import React from 'react'
import '../styles/Login.css'


class Login extends React.Component{
    //constructor(props){
    //    super(props)
    //}

    render(){
        return(
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="../../document/logo.jpg" alt="" className=" logo mb-3"/>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Correo Electronico" required/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Contraseña" required/>
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