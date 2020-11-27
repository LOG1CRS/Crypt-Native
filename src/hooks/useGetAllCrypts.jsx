import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetAllCrypts = (setLoading) => {
  const [crypts, setCrypts] = useState({});
  const source = axios.CancelToken.source();

  useEffect(() => {
    fetchCrypts();
    return () => {
      source.cancel();
    };
  }, []);

  const fetchCrypts = async () => {
    try {
      const res = await axios.get('https://api.coinlore.net/api/tickers/', {
        cancelToken: source.token,
      });
      setCrypts(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return crypts;
};

export default useGetAllCrypts;
