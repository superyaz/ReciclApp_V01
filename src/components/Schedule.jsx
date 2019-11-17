import React from 'react';
import DatePicker from 'react-datepicker';
import {Link} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Schedule.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { getDay } from 'date-fns';

class Schedule extends React.Component {
  state = {
      startDate: null
    };
  
    isWeekDay = date =>{
      const day = getDay(date);
      return day !== 0 && day !== 6
    }
    
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };

   
    render() {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-12 mb-4 d-flex justify-content-center p-3">
                    <Link to=''>
                      <img src="../../document/logo.jpg" className="logo" alt=""/>
                    </Link>
                  </div>
                </div>
                    <ul>
                      <li>
                        <h6 className="mb-2">Recolección Domestica</h6>
                      </li>
                    </ul>
                <div className="row d-flex justify-content-center mt-3">
                  <DatePicker className="form-control" selected={this.state.startDate} filterDate={this.isWeekDay} onChange={this.handleChange}/>
                  <button type="submit"  className="btn btn-md ml-2 btn-date">Agendar</button>
                </div>
                <hr/>
                <div>
                  <ul>
                    <li>
                      <h6 className="mb-2">Puntos de Recolección</h6>
                    </li>
                  </ul>
                </div>
                <div className="row locate d-flex justify-content-center mt-4">
                  <div className="col-6">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/><h6>Av38 #Dg55 Bello</h6>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/><h6>Crr64C #89 Medellín</h6>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/><h6>Crr52 #73 Medellín</h6>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/><h6>Cll 67 #52-20 Medellín</h6>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/><h6>Cll46 #51 Medellín</h6>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/><h6>Cll47D #70 Laureles</h6>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/><h6>Av80 #46 Belén</h6>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/><h6>Av Las Vegas #10 Poblado</h6>
                      </li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <ul>
                      <li>
                        <button type="submit" className="btn btn-sm ml-5">Seleccionar</button>
                      </li>  
                      <li>
                        <button type="submit" className="btn btn-sm ml-5">Seleccionar</button>
                      </li>  
                      <li>
                        <button type="submit" className="btn btn-sm ml-5">Seleccionar</button>
                      </li>  
                      <li>
                        <button type="submit" className="btn btn-sm ml-5">Seleccionar</button>
                      </li>  
                      <li>
                        <button type="submit" className="btn btn-sm ml-5">Seleccionar</button>
                      </li>  
                      <li>
                        <button type="submit" className="btn btn-sm ml-5">Seleccionar</button>
                      </li>  
                      <li>
                        <button type="submit" className="btn btn-sm ml-5">Seleccionar</button>
                      </li>  
                      <li>
                        <button type="submit" className="btn btn-sm ml-5">Seleccionar</button>
                      </li>  
                    </ul>
                    
                  </div>
                </div>

                <div className="row d-flex justify-content-center mt-5 mb-3">
                  <button type="submit"  className="btn btn-lg ml-2 btn-next">Continuar</button>
                </div>
            </div>
            </div>
          </div>
        </React.Fragment>        
      );
    }
}
 

export default Schedule;