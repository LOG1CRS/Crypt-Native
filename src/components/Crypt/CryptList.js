import React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import CryptItem from './CryptItem';

const CryptList = (props) => {
  const { loading, data, navigation } = props;

  const handleCryptPress = (crypt) => {
    navigation.navigate('Details', { crypt });
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator color="#000" size="large" />
      ) : (
        <FlatList
          data={data}
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
    </>
  );
};

export default CryptList;
