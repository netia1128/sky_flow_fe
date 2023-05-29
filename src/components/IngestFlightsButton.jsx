import addIcon from '../assets/AddIcon.png';

export const IngestFlightsButton = () => {
  return (
    <button>
      <img src={addIcon} alt="Ingest Button"></img>
      <h2>
        Get Latest Flights
      </h2>
    </button>
  )
}