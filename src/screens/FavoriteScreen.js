import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../assets/style/colors';
import CryptList from '../components/Crypt/CryptList';

const FavoriteScreen = (props) => {
  const { navigation } = props;

  const favorites = useSelector((state) => state.favorites);

  return (
    <View style={styles.favoriteScreen}>
      {favorites.length !== 0 ? (
        <CryptList data={favorites} navigation={navigation} />
      ) : (
        <View style={styles.messageContainer}>
          <Image
            style={styles.messageImage}
            source={require('../assets/static/no-favorites.png')}
          />
          <Text style={styles.messageText}>You don't have favorites yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  favoriteScreen: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  messageImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  messageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(166, 166, 166, 0.5)',
  },
});

export default FavoriteScreen;
