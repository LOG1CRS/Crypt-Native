import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CryptDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cryptocurrency Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CryptDetailsScreen;
