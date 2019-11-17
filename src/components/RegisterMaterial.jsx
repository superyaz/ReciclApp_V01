import React from 'react';
import Quagga from 'quagga';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../styles/RegisterMaterial.css';

class RegisterMaterial extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          nocamera: false,
          typeMaterials: [],

           /* Valor Inicial de cada name, para enviar al backend */
          codigoScanner:'',
          typeMaterial: '',
          quantityofproducts: ''
        };
      }
    
      async componentDidMount() {
        Quagga.init(
          {
            inputStream: {
              name: "Live",
              type: "LiveStream",
              constraints: {
                width: "790",
                height: "490"
              },
              numberOfWorkers: navigator.hardwareConcurrency,
              target: document.querySelector("#barcodescan")
            },  
            locate: true,
            decoder: {
              readers: ["code_128_reader","upc_reader", "upc_e_reader"]
            }
          },
          function(err) {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
          }
        );

        Quagga.onDetected(data => {
            console.log(data);
            document.querySelector("#codigo").innerHTML = data.codeResult.code;
            this.setState({
                codigoScanner: data.codeResult.code
            })
            // console.log(this.state.codigoScanner);
        });

        const responseTypeMaterials = await axios.get('http://localhost:4000/api/material/typeMaterials');
        this.setState({
            typeMaterials: responseTypeMaterials.data.materials,
            typeMaterial: responseTypeMaterials.data.materials[0].id
        });
        // console.log(this.state.typeMaterial);
    };

    onSelectAndInputChange = (eventObject) => {
        this.setState({
            [eventObject.target.name]: eventObject.target.value
        })
        // console.log(eventObject.target.name, eventObject.target.value);
    }

    onSubmit = async(eventObject) => {
        eventObject.preventDefault();
        
        /* Enviando la data al backend */
        const materialAndQuantity = {
            codigoScanner: this.state.codigoScanner,
            quantity: this.state.quantityofproducts,
            typeMaterial_id: this.state.typeMaterial
        }

        this.setState({
            codigoScanner: '',
            // typeMaterial: '',
            quantityofproducts: ''
        });

        document.querySelector("#codigo").innerHTML = '';
        await axios.post('http://localhost:4000/api/material/createMaterial', materialAndQuantity);
    }

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

                        <div className="row mb-4">
                            <div className="col-12 d-flex mb-4 align-items-center justify-content-center title">
                                <h3>Registro de Materiales</h3>
                            </div>
                        </div>
                          <form onSubmit={this.onSubmit}>
                          <div className="form-group row ">
                                <div className="col-12">
                                    <h6 className="d-flex justify-content-center">Escaner de Codigo de Barra</h6>
                                    <div id='barcodescan' className="d-flex justify-content-center"></div>
                                    <div id="codigo" className="d-flex justify-content-center"></div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <h6>Codigo de Barra</h6>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <h6>Seleccione tipo de material</h6>
                                    <select onChange={this.onSelectAndInputChange} name="typeMaterial" typeof="text" className="form-control" required>
                                        {
                                            this.state.typeMaterials.map(typeMaterial => 
                                            <option key={typeMaterial.id} value={typeMaterial.id}>
                                                {typeMaterial.typeMaterial}
                                            </option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <h6>Cantidad de productos correspondiente al material seleccionado</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.quantityofproducts} name="quantityofproducts" type="text" className="form-control" required/>
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-center mt-3 mb-5">
                                <button type="submit" className="form-control btn btn-lg btn-registrarse" name="registrarse">Ingresar</button>
                                {/* <Link to="/List">
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

export default RegisterMaterial;