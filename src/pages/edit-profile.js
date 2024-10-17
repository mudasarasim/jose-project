import React from 'react';
import Sidebar from '../componnents/sidebar';

const EditProfile = () => {
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
                            <div className="col-xl-10 col-lg-10">
                                <h1 style={{fontWeight: '500'}}>Edit Profile</h1>
                                <form className="forms-sample mt-4">
                                    <div className="row">
                                        {/* Profile form fields go here */}
                                        <div className="form-group col-xl-6 col-lg-6">
                                            <label htmlFor="exampleInputUsername1" style={{ fontSize: '16px', fontWeight: '600' }}>First Name</label>
                                            <input type="text" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputUsername1" placeholder="Jorjia" />
                                        </div>
                                        <div className="form-group col-xl-6 col-lg-6">
                                            <label htmlFor="exampleInputUsername2" style={{ fontSize: '16px', fontWeight: '600' }}>Last Name</label>
                                            <input type="text" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputUsername2" placeholder="Smith" />
                                        </div>
                                        <div className="form-group col-xl-12 col-lg-12">
                                            <label htmlFor="exampleInputEmail" style={{ fontSize: '16px', fontWeight: '600' }}>Email</label>
                                            <input type="text" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputEmail" placeholder="Jorjiasmith.business@gmail.com" />
                                        </div>
                                        <div className="form-group col-xl-12 col-lg-12">
                                            <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Address</label>
                                            <input type="text" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" placeholder="33062 Zboncak Isle" />
                                        </div>
                                        <div className="form-group col-xl-6 col-lg-6">
                                            <label htmlFor="exampleInputPhone" style={{ fontSize: '16px', fontWeight: '600' }}>Contact Number</label>
                                            <input type="text" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputPhone" placeholder="+1 123 123 1234" />
                                        </div>
                                        <div className="form-group col-xl-6 col-lg-6">
                                            <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>Timezone</label>
                                            <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                <option value="">GMT+5</option>
                                                <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>
                                                <option value="America/Anchorage">(UTC-09:00) Alaska</option>
                                                <option value="America/Los_Angeles">(UTC-08:00) Pacific Time (US & Canada)</option>
                                                <option value="America/Denver">(UTC-07:00) Mountain Time (US & Canada)</option>
                                                <option value="America/Chicago">(UTC-06:00) Central Time (US & Canada)</option>
                                                <option value="America/New_York">(UTC-05:00) Eastern Time (US & Canada)</option>
                                                <option value="America/Sao_Paulo">(UTC-03:00) Brasilia</option>
                                                <option value="Atlantic/Azores">(UTC-01:00) Azores</option>
                                                <option value="Europe/London">(UTC+00:00) London</option>
                                                <option value="Europe/Berlin">(UTC+01:00) Berlin</option>
                                                <option value="Europe/Istanbul">(UTC+03:00) Istanbul</option>
                                                <option value="Asia/Dubai">(UTC+04:00) Dubai</option>
                                                <option value="Asia/Kolkata">(UTC+05:30) India Standard Time</option>
                                                <option value="Asia/Singapore">(UTC+08:00) Singapore</option>
                                                <option value="Asia/Tokyo">(UTC+09:00) Tokyo</option>
                                                <option value="Australia/Sydney">(UTC+10:00) Sydney</option>
                                                <option value="Pacific/Auckland">(UTC+12:00) Auckland</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-xl-6 col-lg-6">
                                            <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>City</label>
                                            <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                <option value="">Mehrab</option>
                                                <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>
                                                
                                            </select>
                                        </div>
                                        <div className="form-group col-xl-6 col-lg-6">
                                            <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>State</label>
                                            <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                <option value="">Bozorgi</option>
                                                <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>
                                                
                                            </select>
                                        </div>
                                        <div className="form-group col-xl-12 col-lg-12">
                                            <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Password</label>
                                            <input type="text" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" placeholder="sbdfbnd65sfdvb s" />
                                        </div>
                                        <button type="submit" className="btn mr-2 mb-4 ml-3" style={{ background: 'transparent', color: '#FF7008', border: '1px solid #FF7008' }}>Cancel</button>
                                        <button type="submit" className="btn mr-2 mb-4 ml-3" style={{ background: '#FF7008', color: 'white' }}>Save</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-1 col-lg-1"><img src="assets/images/faces/face1.jpg" alt="hjy" height={80} style={{ marginLeft: '-127px', marginTop: '-20px', border: '2px solid #457B9D', borderRadius: '50%' }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
