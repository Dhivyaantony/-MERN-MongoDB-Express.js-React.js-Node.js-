import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardSubTitle
} from 'mdb-react-ui-kit';
import { BASE_URL } from '../Constants/constants';
import { useNavigate } from 'react-router-dom';


  export default function Cards({ data }) {
    const navigate = useNavigate(); // Initialize useNavigate
  
    const handleCardClick = () => {
      navigate(`/courtUserViewPage/${data._id}`);
    };
  return (
    <MDBCard style={{ maxWidth: '18rem' }}className='col-12 col-md-3 col-lg-4 col-xl-2 col-xxl-1' onClick={handleCardClick}
    >
      <MDBCardImage src={`${BASE_URL}/courts/${data.courtImage}`} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{data?.courtName}</MDBCardTitle>
        <MDBCardSubTitle>{data?.sportype}</MDBCardSubTitle>
        <MDBCardSubTitle>{data?.location}</MDBCardSubTitle>
        <MDBCardSubTitle>{data?.description}</MDBCardSubTitle>

        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

  

  // ... rest of the component

