import React, { useState, useEffect } from 'react';
import MainNavBar from '../Components/Common/MainNavBar';
import Cards from '../Components/Cards';
import Footer from '../Components/Common/Footer';
import AxiosInstance from '../config/AxiosInstance';

function Home() {

  const [loading, setLoading] = useState(true);
  const [courtData, setCourtData] = useState([]);

  useEffect(() => {
    const getAllcourtData = async () => {
      try {
        const response = await AxiosInstance.get('/users/getAllcourtData');
        // Handle the response data here
        console.log('Court data:', response.data);
        setCourtData(response.data); // Assuming the response data is an array
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log('Error in getting data', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    // Call the function when the component mounts
    getAllcourtData();

    // Cleanup function (optional)
    return () => {
      // Any cleanup code if needed
    };
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <>
      <MainNavBar />
      <div className='car d-flex flex-row'>
        {
          courtData.map((court)=><Cards court={court}/>
            
           )
        }
        
        

      </div>

      {/* Loader */}
      {loading && <div>Loading...</div>}

      {/* Your home component content */}
      {!loading && (
        <div>
          {/* Render your content using the courtData state */}
          {courtData.map((court) => (
            <div key={court.id}>{/* Render court details here */}</div>
          ))}
        </div>
      )}

      <Footer />
    </>
  );
}

export default Home;
