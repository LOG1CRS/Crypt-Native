import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../assets/style/colors';
import CryptList from '../components/Crypt/CryptList';

const SearchScreen = (props) => {
  const { navigation } = props;

  const crypts = useSelector((state) => state.crypts);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allCrypts, setAllCrypts] = useState([]);

  useEffect(() => {
    setAllCrypts(crypts);
  }, [crypts]);

  const handleSearchInput = (query) => {
    setSearchQuery(query);

    if (crypts.length === 0) {
      return;
    }

    const coinsFiltered = allCrypts.filter((crypt) => {
      return (
        crypt.name.toLowerCase().includes(query.toLowerCase()) ||
        crypt.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(coinsFiltered);
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
        <>
          {searchResults.length === 0 ? (
            <View style={styles.messageContainer}>
              <Image
                style={styles.messageImage}
                source={require('../assets/static/not-found.png')}
              />
              <Text style={styles.messageText}>Crypto not found</Text>
            </View>
          ) : (
            <View style={styles.listContainer}>
              <CryptList data={searchResults} navigation={navigation} />
            </View>
          )}
        </>
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
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
});

export default SearchScreen;
