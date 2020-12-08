import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCryptsFromAPI } from '../redux/actions/cryptsListAction';

const useGetAllCrypts = () => {
  const dispatch = useDispatch();
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
      dispatch(addCryptsFromAPI(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default useGetAllCrypts;
