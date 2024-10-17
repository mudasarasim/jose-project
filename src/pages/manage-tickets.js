import React from 'react';
import Sidebar from '../componnents/sidebar';
import { Link } from 'react-router-dom';

const ManageTickets = () => {
    return (
        <div className="container-scroller">
            <Sidebar />  {/* Include the Sidebar component */}

            <nav className="navbar rdp col-lg-1 col-12 p-lg-0 fixed-top d-flex flex-row">
                <div className="navbar-menu-wrapper rdp d-flex align-items-stretch justify-content-between">
                    <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                    <button className="navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <button className="navbar-toggler rdp navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>

            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-50px' }}>
                <div className="main-panel" style={{ marginTop: '-68px' }}>
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-1 col-lg-1"></div>
                            <div className="col-xl-10 col-lg-10" style={{marginTop: '130px'}}>
                                <div><Link to={'/create-ticket'}><button className='btn btn-sm mb-3 ml-3 btn-dark'>Create Ticket</button></Link></div>
                                <div className='ml-3' style={{height: '50px', width: '95%', background: '#D9D9D9'}}>
                                    <div className='row'>
                                    <h4 className='ml-4 pt-2 col-lg-4'><img src='assets/images/fix.png' height={30} />Ticket Status</h4>
                                    <div className='col-lg-3 mt-2'></div>
                                    <form className='col-lg-4 ml-3 mt-2'>
                                        <input type='text' className='form-control' placeholder='Search Ticket' />
                                    </form>
                                    </div>
                                </div>
                                <div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-bordered mb-5">
                                                <thead>
                                                    <tr>
                                                        <th style={{background: '#D9D9D9'}}>Ticket</th>
                                                        <th style={{background: '#D9D9D9'}}>Subject</th>
                                                        <th style={{background: '#D9D9D9'}}>Category</th>
                                                        <th style={{background: '#D9D9D9'}}>Status</th>
                                                        <th style={{background: '#D9D9D9'}}>Priorty</th>
                                                        <th style={{background: '#D9D9D9'}}>Type</th>
                                                        <th style={{background: '#D9D9D9'}}>Created Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1448</td>
                                                        <td>
                                                            Ticket Subject
                                                        </td>
                                                        <td>ITS</td>
                                                        <td>Open</td>
                                                        <td>Medium</td>
                                                        <td>Request</td>
                                                        <td>27/03/2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1449</td>
                                                        <td>
                                                            Ticket Subject
                                                        </td>
                                                        <td>PMO</td>
                                                        <td>Open</td>
                                                        <td>Medium</td>
                                                        <td>Request</td>
                                                        <td>27/03/2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1450</td>
                                                        <td>
                                                            Ticket Subject
                                                        </td>
                                                        <td>ITS</td>
                                                        <td>Open</td>
                                                        <td>Medium</td>
                                                        <td>Request</td>
                                                        <td>27/03/2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1451</td>
                                                        <td>
                                                            Ticket Subject
                                                        </td>
                                                        <td>ITS</td>
                                                        <td>Open</td>
                                                        <td>Medium</td>
                                                        <td>Request</td>
                                                        <td>27/03/2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1452</td>
                                                        <td>
                                                            Ticket Subject
                                                        </td>
                                                        <td>ITS</td>
                                                        <td>Open</td>
                                                        <td>Medium</td>
                                                        <td>Request</td>
                                                        <td>27/03/2024</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-1 col-lg-1">
                                <span><i className='mdi mdi-bell menu-icon' style={{ marginLeft: '-57px', fontSize: '30px', marginTop: '-40px', border: '2px solid #457B9D', borderRadius: '50%' }}></i></span>
                                <img src="assets/images/faces/face1.jpg" alt="hjy" height={42} style={{ marginLeft: '18px', marginTop: '-9px', border: '2px solid #457B9D', borderRadius: '50%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTickets;
