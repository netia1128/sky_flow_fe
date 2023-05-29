import { useState, useEffect } from "react";
import axios from 'axios';

export function useAxiosPost (path) {
  const [isError, setIsError] = useState(false);
  const rootUrl = `http://localhost:3030`

  // useEffect(() => {
    // let isApiSubscribed = true;
    // const controller = new AbortController();

    // const sendPostRequest = async () => {
    //   try {
    //     await axios.post(rootUrl + path, { signal: AbortSignal.timeout(5000) });
    //   } catch (err) {
    //     console.log(err)
    //     setIsError(true);
    //   }
    // }

    // sendPostRequest()
    
    // return () => {
    //   isApiSubscribed = false;
    //   controller.abort();
    //   }
    // }, [path]
    // )

    return () => {
      console.log('ehyyy');
    }
}