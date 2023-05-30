import axios from 'axios';
import { useState } from 'react';
import addIcon from '../assets/AddIcon.png';

export const IngestFlightsButton = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendPostRequest = async () => {
    setIsLoading(true);
    let postResult = '';
    try {
      postResult = await axios.post(`http://localhost:3030/jobs/flightingest`);
      console.log(postResult);
    } catch (err) {
      console.log(err)
      setIsError(true);
      setIsLoading(false)
      setTimeout(() => {
        setIsError(false);
      }
      , 5000)
      
      setIsLoading(false);
    }
    if (postResult.status === 200) {
      setIsLoading(false);
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }
      , 5000)
    }
  }

  return (
    <div className="ingest-flight-button-container">
      {!isLoading && !isError && <button onClick={() => sendPostRequest()}>
        <img src={addIcon} alt="Ingest Button"></img>
        <h2>
          Get Latest Flights
        </h2>
      </button>}
      {isLoading && !isError && <h2>Getting Latest Flights!</h2>}
      {isError && <h2>An error occurred while fetching flights</h2>}
    </div>
  )
}