import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import useGetAllCrypts from '../hooks/useGetAllCrypts';
import CryptList from '../components/Crypt/CryptList';
import colors from '../assets/style/colors';

const MainScreen = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = useState(true);
  const crypts = useGetAllCrypts(setLoading);

  return (
    <View style={styles.container}>
      <CryptList loading={loading} data={crypts.data} navigation={navigation} />
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
