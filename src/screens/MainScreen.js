import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const MainScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text>Crypt Native Main Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </Pressable>
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
  button: {
    marginTop: 20,
  },
  buttonText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default MainScreen;
