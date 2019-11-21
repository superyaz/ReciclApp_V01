import React from 'react';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../helpers/jwt'
import axios from 'axios'

class InfoUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      /* Datos de usuario */
      user_id: 0,
      fullName: '',
      typeDocument: '',
      numberDocument: '',
      mobilePhone: '',
      email: '',
      neighborhood: '',
      addressHome: '',
      typeHouse:'',

      /* Datos registro Material */
      collects: [],

      /* Datos fecha Y/O lugar registrado */
      appointment_id: 0,
      appointmentLocation_id: 0,
      date: '',
      location: ''
    }
  }

  componentDidMount() {
    const token = getJwt();

    if(!token){
      return this.props.history.push('/login');
    }

    axios.get('http://localhost:4000/api/information/infoUser', {
      headers: {
        token: `${token}`
      },
    }).then(res => this.setState({
      id: res.data.infoUser[0].id,
      fullName: res.data.infoUser[0].fullName,
      typeDocument: res.data.infoUser[0].typeDocument,
      numberDocument: res.data.infoUser[0].numberDocument,
      mobilePhone: res.data.infoUser[0].mobilePhone,
      email: res.data.infoUser[0].email,
      neighborhood: res.data.infoUser[0].neighborhood,
      addressHome: res.data.infoUser[0].addressHome,
      typeHouse: res.data.infoUser[0].typeHouse,

      collects: res.data.infoMaterial,

      appointment_id: res.data.infoDate[0].id,
      date: res.data.infoDate[0].dateSchedule,

      appointmentLocation_id: res.data.infoLocation[0].id,
      location: res.data.infoLocation[0].locationName
    })).catch(err => {
      console.log(err);
      this.props.history.push('/login');
    })
  }

  onClick = (eventObject) => {
    eventObject.preventDefault();
    this.props.history.push('/');
  }

  render(){
    return(
      <React.Fragment>
        <h1 className="row locate d-flex justify-content-center mt-4">Información De Interés</h1>
        <h6>Datos del Usuario =></h6>
        <div className="row locate d-flex justify-content-center mt-2">
          <table>
            <tbody>
              <tr key={this.state.user_id}>
                <td><strong><span>NOMBRE COMPLETO: </span></strong>{this.state.fullName}</td>
              </tr>
              <tr key={this.state.user_id+1}>
                <td><strong><span>DOCUMENTO DE IDENTIDAD: </span></strong>{this.state.typeDocument}</td>
              </tr>
              <tr key={this.state.user_id+2}>
                <td><strong><span>NUMERO DE IDENTIDAD: </span></strong>{this.state.numberDocument}</td>
              </tr>
              <tr key={this.state.user_id+3}>
                <td><strong><span>CORREO ELECTRONICO: </span></strong>{this.state.email}</td>
              </tr>
              <tr key={this.state.user_id+4}>
                <td><strong><span>CELULAR: </span></strong>{this.state.mobilePhone}</td>
              </tr>
              <tr key={this.state.user_id+5}>
                <td><strong><span>BARRIO: </span></strong>{this.state.neighborhood}</td>
              </tr>
              <tr key={this.state.user_id+6}>
                <td><strong><span>DIRECCIÓN: </span></strong>{this.state.addressHome}</td>
              </tr>
              <tr key={this.state.user_id+7}>
                <td><strong><span>VIVIENDA: </span></strong>{this.state.typeHouse}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h6>Registro Materiales =></h6>
        <div className="row locate d-flex justify-content-center mt-2 mb-2">
          <table>
            <tbody>
              {
                this.state.collects.map(listMaterial => {
                  return(
                      <tr key={listMaterial.id}>
                          <td><strong><span>MATERIAL: </span></strong>{listMaterial.typeMaterial}</td>
                          <td><strong><span>CANTIDAD: </span></strong>{listMaterial.quantity}<span> unidades</span></td>
                      </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>
        <h6>Fecha Y/O Lugar de Recolección =></h6>
        <div className="row locate d-flex justify-content-center mt-2 mb-2">
          <table>
            <tbody>
              <tr key={this.state.appointment_id}>
                <td><strong><span>FECHA DE RECOLECCIÓN: </span></strong>{this.state.date}</td>
              </tr>
              <tr key={this.state.appointmentLocation_id+1}>
                <td><strong><span>PUNTO DE ENTREGA SELECCIONADO: </span></strong>{this.state.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row locate d-flex justify-content-center mt-4 mb-2">
          <button onClick={this.onClick} className="btn btn-success">¡Gracias Eco-ciudadano!</button>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(InfoUser);