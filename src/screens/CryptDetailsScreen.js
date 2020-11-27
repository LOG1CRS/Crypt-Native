import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CryptDetailsScreen = (props) => {
  const { route, navigation } = props;
  const crypto = route.params.crypt;

  useEffect(() => {
    navigation.setOptions({ title: `${crypto.name} Details` });
  }, []);

  return (
    <View style={styles.details}>
      <View>
        <Text>{crypto.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {},
});

export default CryptDetailsScreen;
