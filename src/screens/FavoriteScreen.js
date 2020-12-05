import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../assets/style/colors';
import CryptList from '../components/Crypt/CryptList';
import { getAllKeys, multiGetItem } from '../utils/storage';

const FavoriteScreen = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(false);
  const [favoriteCrypts, setFavoriteCrypts] = useState([]);

  useEffect(() => {
    getFavorites();
  });

  const getFavorites = async () => {
    try {
      const allKeys = await getAllKeys();
      const favoritesKeys = allKeys.filter((key) => key.includes('favorite-'));

      if (favoritesKeys.length === 0) {
        setFavorites(false);
        return;
      } else {
        setFavorites(true);
      }

      const cryptsData = await multiGetItem(favoritesKeys);
      const favCrypts = cryptsData.map((fav) => JSON.parse(fav[1]));

      setFavoriteCrypts(favCrypts);
      setLoading(false);
    } catch (err) {
      console.log('Ger Favorites: ', err);
    }
  };

  return (
    <View style={styles.favoriteScreen}>
      {favorites ? (
        <CryptList
          loading={loading}
          data={favoriteCrypts}
          navigation={navigation}
        />
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
