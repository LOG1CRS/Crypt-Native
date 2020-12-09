import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CryptList from '../components/Crypt/CryptList';
import colors from '../assets/style/colors';
import useGetAllCrypts from '../hooks/useGetAllCrypts';
import { setStoredCryptsAction } from '../redux/actions/favoritesAction';
import { getFavoritesCrypts } from '../utils/storage';

const MainScreen = (props) => {
  useGetAllCrypts();
  const dispatch = useDispatch();
  const { navigation } = props;

  const crypts = useSelector((state) => state.crypts);

  useEffect(() => {
    const setFavorites = async () => {
      const favoriteCrypts = await getFavoritesCrypts();

      dispatch(setStoredCryptsAction(favoriteCrypts));
    };

    setFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <CryptList data={crypts} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.charade,
    paddingTop: 5,
  },
});

export default MainScreen;
