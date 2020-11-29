import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import useGetAllCrypts from '../hooks/useGetAllCrypts';
import CryptItem from '../components/Main/CryptItem';
import colors from '../assets/style/colors';

const MainScreen = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = useState(true);
  const crypts = useGetAllCrypts(setLoading);

  const handleCryptPress = (crypt) => {
    navigation.navigate('Details', { crypt });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="#000" size="large" />
      ) : (
        <FlatList
          data={crypts.data}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <CryptItem
              key={item.key}
              crypto={item}
              onPress={() => handleCryptPress(item)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
});

export default MainScreen;
