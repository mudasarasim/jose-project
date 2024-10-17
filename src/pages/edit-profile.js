import React from 'react';

const EditProfile = () => {
    return (
        <div class="container-scroller">
            <nav class="sidebar sidebar-offcanvas" id="sidebar" style={{borderRight: '1px solid black', borderRadius: '0px', background: 'white'}}>
                <ul class="nav" style={{marginTop: '50px'}}>

                    
                    <li className="nav-item">
                        <a className="nav-link" href="pages/icons/mdi.html">
                        <i class="mdi mdi-arrow-left menu-icon" style={{color: 'black', fontWeight: 'bold' }}></i>
                        <span className="menu-title" style={{fontSize: '25px', fontWeight: '500', marginLeft: '10px'}}>Settings</span>
                        </a>
                    </li>

                    <li class="nav-item" style={{marginTop: '70px', marginLeft: '20px' }}>
                        <a class="nav-link" href="pages/charts/chartjs.html">
                        <i class="mdi mdi-pencil menu-icon" style={{color: 'black'}}></i>
                            <span class="menu-title" style={{fontSize: '20px', fontWeight: '400', marginLeft: '5px'}}>Edit Profile</span>
                        </a>
                    </li>
                    <li class="nav-item" style={{marginTop: '18px', marginLeft: '20px' }}>
                        <a class="nav-link" href="pages/charts/chartjs.html">
                        <i class="mdi mdi-bell menu-icon" style={{color: '#858585'}}></i>
                            <span class="menu-title" style={{fontSize: '20px', fontWeight: '400', color: '#858585', marginLeft: '5px'}}>Notifications</span>
                        </a>
                    </li>
                    <li class="nav-item" style={{marginTop: '18px', marginLeft: '20px' }}>
                        <a class="nav-link" href="pages/charts/chartjs.html">
                        <i class="mdi mdi-lock menu-icon" style={{color: '#858585'}}></i>
                            <span class="menu-title" style={{fontSize: '20px', fontWeight: '400', color: '#858585', marginLeft: '5px'}}>Security</span>
                        </a>
                    </li>
                    <li class="nav-item" style={{marginTop: '18px', marginLeft: '20px' }}>
                        <a class="nav-link" href="pages/charts/chartjs.html">
                        <i class="mdi mdi-settings menu-icon" style={{color: '#858585'}}></i>
                        <span class="menu-title" style={{fontSize: '20px', fontWeight: '400', color: '#858585', marginLeft: '5px'}}>Ticket</span>
                        </a>
                    </li>
                    <li class="nav-item" style={{marginTop: '18px', marginLeft: '20px' }}>
                        <a class="nav-link" href="pages/charts/chartjs.html">
                        <i class="mdi mdi-help menu-icon" style={{color: '#858585'}}></i>
                        <span class="menu-title" style={{fontSize: '20px', fontWeight: '400', color: '#858585', marginLeft: '5px'}}>Help</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav class="navbar rdp col-lg-1 col-12 p-lg-0 fixed-top d-flex flex-row">
                <div class="navbar-menu-wrapper rdp d-flex align-items-stretch justify-content-between">
                    <a class="navbar-brand brand-logo-mini align-self-center d-lg-none" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                    <button class="navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
                        <i class="mdi mdi-menu"></i>
                    </button>
                    <button class="navbar-toggler rdp navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span class="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-50px' }}>

                <div className="main-panel">
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        
        </div>

    );
};

export default EditProfile;
