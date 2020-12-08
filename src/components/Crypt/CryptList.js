import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import CryptItem from './CryptItem';

const CryptList = (props) => {
  const { navigation, data } = props;

  const handleCryptPress = (crypt) => {
    navigation.navigate('Details', { crypt });
  };

  return (
    <>
      {data.length === 0 ? (
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
