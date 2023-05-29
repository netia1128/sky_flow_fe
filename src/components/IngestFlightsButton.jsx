import addIcon from '../assets/AddIcon.png';
import { useAxiosPost } from '../hooks/useAxiosPost';

export const IngestFlightsButton = () => {
  const ingestFlights = useAxiosPost();

  return (
    <button onClick={ingestFlights}>
      <img src={addIcon} alt="Ingest Button"></img>
      <h2>
        Get Latest Flights
      </h2>
    </button>
  )
}