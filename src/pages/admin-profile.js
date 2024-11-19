import React from 'react';
import AdminSidebar from '../componnents/admin-sidebar';

const AdminProfile = () => {
    return (
        <div className="container-scroller">
            <AdminSidebar />  {/* Include the Sidebar component */}

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
                            <div className="col-xl-10 col-lg-10">
                                <h1 className='text-center' style={{marginTop: '130px', fontWeight: '500'}}><img alt='ghj' src='assets/images/fix.png' height={50} /> Notifications</h1>
                                <h4 className='ml-4'>List of notifications</h4>
                                <div>
                                <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered mb-5">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Subject</th>
                            <th>Notification Body</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>02/03/2024</td>
                            <td>
                                Subject                         
                            </td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
                          </tr>
                          <tr>
                            <td>03/03/2024</td>
                            <td>
                             Subject
                             </td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
                          </tr>
                          <tr>
                            <td>04/03/2024</td>
                            <td>
                              Subject
                            </td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
                          </tr>
                          <tr>
                            <td>05/03/2024</td>
                            <td>
                              Subject
                            </td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
                          </tr>
                          <tr>
                            <td>06/03/2024</td>
                            <td>
                              Subject
                            </td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
                          </tr>
                          <tr>
                            <td>07/03/2024</td>
                            <td>
                              Subject
                            </td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
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

export default AdminProfile;
