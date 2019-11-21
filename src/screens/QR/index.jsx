import React, { Component } from "react";
import QRCode from 'qrcode.react'




class Index extends Component{
    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3 justify-content-center">
                        <QRCode value="http://facebook.github.io/react/"/>
                        <p>User1</p>

                    </div>
                </div>
            </div>
        );
    };
};

export default Index;