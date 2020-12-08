import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CryptList from '../components/Crypt/CryptList';
import colors from '../assets/style/colors';
import useGetAllCrypts from '../hooks/useGetAllCrypts';

const MainScreen = (props) => {
  useGetAllCrypts();
  const { navigation } = props;

  const crypts = useSelector((state) => state.crypts);

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
