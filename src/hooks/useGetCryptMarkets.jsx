import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetCryptMarkets = (setLoading, coinId) => {
  const [markets, setMarkets] = useState({});
  const source = axios.CancelToken.source();

  useEffect(() => {
    fetchMarkets();
    return () => {
      source.cancel();
    };
  }, []);

  const fetchMarkets = async () => {
    try {
      const res = await axios.get(
        `https://api.coinlore.net/api/coin/markets/?id=${coinId}`,
        {
          cancelToken: source.token,
        }
      );
      setMarkets(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return markets;
};

export default useGetCryptMarkets;
