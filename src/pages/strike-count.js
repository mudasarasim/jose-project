import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import LeftSidebar from '../componnents/LeftSidebar';
import RightSidebar from '../componnents/RightSidebar';
import { Link } from 'react-router-dom';
import Modal from '../componnents/modal';

const StrikeCount = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openTicketModal = () => {
        closeModal(); // Close the first modal
        setIsTicketModalOpen(true); // Open the ticket modal
    };
    const closeTicketModal = () => setIsTicketModalOpen(false);

    return (
        <div className="container-scroller">
            <LeftSidebar />
            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-90px' }}>
                <div className="main-panel">
                    <div className="content-wrapper pb-0">
                    <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    {/* First Card */}
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: 'white', height: 100, borderRadius: 15, position: 'relative', boxShadow: '2px 1px 1px 1px ' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='assets/images/hand.png' height={50} style={{ marginTop: '23px', marginLeft: '50px' }} alt='ss' />
                                                        <h2 style={{ color: 'black', fontSize: 11, fontWeight: 500, marginTop: '-50px' }}>Accumulated Earnings</h2>
                                                        <div style={{ height: '3px', width: '40px', background: '#EC6B47', marginLeft: '55px', marginTop: '13px' }}></div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: 'white', height: 100, borderRadius: 15, position: 'relative', boxShadow: '2px 1px 1px 1px ' }}>
                                            <div className="card-body px-3">
                                                <Link to={'/strike-count'} className="color-card" style={{ marginTop: -40 }}>
                                                    <img src='assets/images/strike.png' height={50} style={{ marginTop: '23px', marginLeft: '50px' }} alt='ss' />
                                                    <h2 style={{ color: 'black', fontSize: 11, fontWeight: 500, marginTop: '-50px', marginLeft: '35px' }}> Strike Count</h2>
                                                    <div style={{ height: '3px', width: '40px', background: '#38C381', marginLeft: '55px', marginTop: '13px' }}></div>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: 'white', height: 100, borderRadius: 15, position: 'relative', boxShadow: '2px 1px 1px 1px ' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='assets/images/write.png' height={50} style={{ marginTop: '23px', marginLeft: '50px' }} alt='ss' />
                                                        <h2 style={{ color: 'black', fontSize: 11, fontWeight: 500, marginTop: '-0px', marginLeft: '26px' }}> Contract Length</h2>
                                                        <h3 style={{ color: 'black', fontSize: 17, fontWeight: 500, marginTop: '-10px', marginLeft: '40px' }}> 180 Days</h3>
                                                        <div style={{ height: '3px', width: '40px', background: '#116CBD', marginLeft: '55px', marginTop: '-5px' }}></div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="content-wrapper pb-0" style={{ marginTop: '-70px' }}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="">
                                    <div className="row">
                                        <h4 className="card-title col-xl-8" style={{ fontSize: '15px' }}>
                                            Contract Duration: March 24, 2024 - September 20, 2024
                                        </h4>
                                        <select type="drop" style={{ marginLeft: '140px', background: '#F9FBFF' }}>
                                            <option>Filter</option>
                                        </select>
                                        <div className="table-responsive mt-2">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Strike Type</th>
                                                        <th>Strike Count</th>
                                                        <th>View Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>25/03/2024</td>
                                                        <td>Type 01</td>
                                                        <td>1</td>
                                                        <td>
                                                            <p style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={openModal} className="view-details-btn">
                                                                View Details
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightSidebar />

            {/* First Modal for View Details */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div>
                    <p><strong>Date:</strong> 27/03/2024</p>
                    <p><strong>Strike Type:</strong> Type 1</p>
                    <p><strong>Strike Type Rules:</strong></p>
                    <p>Strike type 1 is caused by Teacher No Show. Even if the teacher gets multiple Teacher No Show within 1 day, teachers can only receive 1 strike per day for Teacher No Show.</p>
                    <p><strong>Classes involved in Strike Type:</strong></p>
                    <ul>
                        <li>● Jorija - L1-U1-L1 4:30PM - 5:30PM</li>
                    </ul>
                    <button onClick={openTicketModal} className="create-ticket-btn">Create Ticket</button>
                </div>
                <style jsx>{`
                    .create-ticket-btn {
                        background: #457B9D;
                        color: white;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 16px;
                    }
                    .create-ticket-btn:hover {
                        background: #356580;
                    }
                    .view-details-btn {
                        background: #116CBD;
                        color: white;
                        padding: 5px 10px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                        ul li{
                           list-style: none;
                        }
                `}</style>
            </Modal>

            {/* Second Modal for Create Ticket */}
            <Modal isOpen={isTicketModalOpen} onClose={closeTicketModal}>
                <div style={{marginTop: '20px'}}>
                    <p>27/03/2024 <span style={{float: 'right', fontSize: '17px', fontWeight: 'bold'}}>Strike Type: <span style={{fontWeight: '400'}}>Type 1</span></span></p>
                    <p></p>
                    <p style={{fontWeight: 'bold'}}>Write your Ticket below and upload supporting documents before submitting</p>
                    <form>
                        <textarea rows={7} style={{background: '#D9D9D9'}} placeholder=""></textarea>
                        <button type="file" className="submit-btn">Upload Files</button>
                        <button type="submit" className="submit-btn ml-3">Submit Ticket</button>
                    </form>
                </div>
                <style jsx>{`
                    .submit-btn {
                        background: #457B9D;
                        color: white;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 16px;
                    }
                    .submit-btn:hover {
                        background: #356580;
                    }
                    input, textarea {
                        display: block;
                        width: 100%;
                        padding: 10px;
                        margin: 10px 0;
                        border-radius: 5px;
                        border: 1px solid #ddd;
                    }
                `}</style>
            </Modal>
        </div>
    );
};

export default StrikeCount;
