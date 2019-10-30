import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';

export class index extends PureComponent {
    render() {

        return (
            <div>
                <Header />
                <Sidenav />
                <div className="mt-5 container">

                    <div className="table-responsive">
                        <table className="table table-striped table-sm mt-5">
                            <thead>
                                <tr>
                                    <th>#</th>

                                    <th>Id</th>

                                    <th>Fecha</th>

                                    <th>Dirección</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,001</td>

                                    <td>3607</td>

                                    <td>06-10-2020</td>

                                    <td>262 17ºC</td>
                                </tr>
                                <tr>
                                    <td>1,002</td>

                                    <td>2305  </td>

                                    <td>01-11-2019</td>
                                    <td>185B</td>
                                </tr>
                                <tr>
                                    <td>1,003</td>

                                    <td>4463</td>

                                    <td>06-04-2022</td>

                                    <td>231 14ºB</td>
                                </tr>
                                <tr>
                                    <td>1,003</td>

                                    <td>2944</td>

                                    <td>17-03-2022</td>

                                    <td>209B 19ºF</td>
                                </tr>
                                <tr>
                                    <td>1,004</td>

                                    <td>2537</td>

                                    <td>15-12-2019</td>

                                    <td>209B 19ºF</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        );
    }
}

export default index;
