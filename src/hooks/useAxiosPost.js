import { useState, useEffect } from "react";
import axios from 'axios';

export const useAxiosPost = (path) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const rootUrl = `http://localhost:3030`

  useEffect(() => {
    let isApiSubscribed = true;
    const controller = new AbortController();
    
    const getData = async () => {
      try {
        const {data: fetchedData} = await axios.get(rootUrl + path, { signal: AbortSignal.timeout(5000) });
        if (isApiSubscribed) setData(fetchedData);
      } catch (err) {
        console.log(err)
        setIsError(true);
      }
    }

    // Adding a timeout just to show off the loading effect 
    setTimeout(() => {
      getData()
      setIsLoading(false)
      }
    , 1000)
      
    return () => {
      isApiSubscribed = false;
      controller.abort();
      }
    }, [path]
    )
    return { data, isLoading, isError}
}