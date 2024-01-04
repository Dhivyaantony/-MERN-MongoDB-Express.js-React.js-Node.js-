import React, { useState, useEffect } from 'react';
import MainNavBar from '../Components/Common/MainNavBar';
import AxiosInstance from '../config/AxiosInstance';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../Constants/constants';
import TimeSlotModal from './Common/Modal';

const CourtBooking = () => {
  const [singleCourtData, setSingleCourtData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeslot, setTimeslot] = useState({startDate:'',endDate:''});
  const { id } = useParams();

  useEffect(() => {
    getSingleCourtData();
  }, []);

  const getSingleCourtData = () => {
    AxiosInstance.get('users/getSinglecourtData', { params: { courtId: id } })
      .then((res) => {
        setSingleCourtData(res.data);
      })
      .catch((err) => {
        console.log('Error in getting the data of a single court', err);
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  const handleChange=(e)=>{
    setTimeslot({...timeslot,[e.target.name ]:e.targetvalue})
    

    
  }

  return (
    <>
      <div className='single-court-img-box'>
        <img src={`${BASE_URL}/courts/${singleCourtData?.courtImage}`} alt="" />

        <div className='court-Name'>
          <h3>{singleCourtData?.courtName}</h3>
          <button onClick={openModal}>Add Time Slot</button>
        </div>
      </div>

      <div className='d-flex'>
        <marquee behaviour="scroll" direction="right" className="rolling-booking">
          <h3 className='d-inline'>Confirm your slot at the earliest</h3>
        </marquee>
      </div>

      <div className='container-fluid mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-3 col-12 border border-1 rounded-2'>
            <div className='date-picker'>
                <span>today</span>
                <span>tomorrow</span>
                <input type="text"placeholder='select a date' />
                </div>
                <div className='slotname-container d-flex flex-wrap gx-2 gap-3 mt-5 pointer'>
              <span>1-2pm</span>
              <span>1-2pm</span>
              <span>1-2pm</span>
              <span>1-2pm</span>
              <span>1-2pm</span>
              <span>1-2pm</span>
              <span>1-2pm</span>
            </div>
            <button className='btn btn-primary w-100 mt-5 border'>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* TimeSlotModal */}
      <TimeSlotModal modalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
        <div className='d-flex flex-column add-court-timing-modal'>
          <h3>{singleCourtData?.courtName}</h3>
          <h5>{singleCourtData?.location}</h5>
          <label htmlFor=''>Starting Date</label>
          <input type='date'value={timeslot.startDate} name='startdate'onChange={handleChange}/>
          <label htmlFor=''>End Date & Time</label>
          <input type="date"value={timeslot.endDate} name='enddate'onChange={handleChange}/> 
          <label htmlFor="">Cost</label>
          <input type="number" />
          <div className='cus-dropdown mt-4 d-inline'>
            Select Timings
            <div className='cus-option'>
              <ul>
                <li>Time 1</li>
                <li>Time 2</li>
                {/* Add more options as needed */}
              </ul>
            </div>
            <div className='m-2'>
               < span className='border border-1 bg-warning border rounded-2 border-dark p-1'>
                name
               </span>
            </div>
          </div>
        </div>
        <button className='btn-primary w-100 mt-3 bg-primary border-rounded-2'>
            {" "}
            Submit{" "}
        </button>
      </TimeSlotModal>
    </>
  );
};

export default CourtBooking;
