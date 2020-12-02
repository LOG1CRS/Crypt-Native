import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import colors from '../assets/style/colors';
import useGetAllCrypts from '../hooks/useGetAllCrypts';
import CryptItem from '../components/Main/CryptItem';

const SearchScreen = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = useState(true);
  const crypts = useGetAllCrypts(setLoading);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allCrypts, setAllCrypts] = useState([]);

  useEffect(() => {
    setAllCrypts(crypts.data);
  }, [loading]);

  const handleSearchInput = (query) => {
    setSearchQuery(query);

    const coinsFiltered = allCrypts.filter((crypt) => {
      return (
        crypt.name.toLowerCase().includes(query.toLowerCase()) ||
        crypt.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(coinsFiltered);
  };

  const handleCryptPress = (crypt) => {
    navigation.navigate('Details', { crypt });
  };

  return (
    <View style={styles.searchView}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Cryptocurrency"
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          onChangeText={handleSearchInput}
        />
      </View>
      {searchQuery.length === 0 ? (
        <View style={styles.messageContainer}>
          <Image
            style={styles.messageImage}
            source={require('../assets/static/search-img.png')}
          />
          <Text style={styles.messageText}>Type your search</Text>
        </View>
      ) : (
        <View style={styles.listContainer}>
          {loading ? (
            <ActivityIndicator color="#000" size="large" />
          ) : (
            <FlatList
              data={searchResults}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  searchBarContainer: {
    height: 70,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    alignContent: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    color: colors.white,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderColor: colors.white,
    borderRadius: 15,
    padding: 16,
    margin: 10,
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
  listContainer: {
    flex: 1,
    paddingTop: 5,
  },
});

export default SearchScreen;
