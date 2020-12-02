import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import colors from '../assets/style/colors';
import CryptImage from '../components/Crypt/CryptImage';
import useGetCryptMarket from '../hooks/useGetCryptMarkets';
import MarketItem from '../components/Details/MarketItem';

const CryptDetailsScreen = (props) => {
  const { route, navigation } = props;
  const { crypt } = route.params;
  const [loading, setLoading] = useState(true);
  const markets = useGetCryptMarket(setLoading, crypt.id);

  useEffect(() => {
    navigation.setOptions({ title: `${crypt.name} Details` });
  }, []);

  const getSections = (crypt) => {
    const sections = [
      {
        title: 'Market Cap',
        data: [crypt.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [crypt.volume24],
      },
      {
        title: 'Change 24h',
        data: [crypt.percent_change_24h],
      },
    ];

    return sections;
  };

  return (
    <View style={styles.details}>
      <View style={styles.subHeader}>
        <View style={styles.iconContainer}>
          <CryptImage iconStyle={styles.cryptIcon} symbol={crypt.symbol} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>{crypt.name}</Text>
        </View>
      </View>
      <SectionList
        style={styles.section}
        sections={getSections(crypt)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
      <Text style={styles.listTitle}>Markets</Text>
      {loading ? (
        <View style={styles.listLoadingContainer}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={markets}
          keyExtractor={(item) => `${item.base}-${item.name}-${item.quote}`}
          renderItem={({ item }) => <MarketItem item={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    backgroundColor: colors.charade,
    flex: 1,
  },
  subHeader: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0, 0.1)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cryptIcon: {
    width: 70,
    height: 70,
  },
  headerTitle: {
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold',
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    paddingLeft: 8,
  },
  listTitle: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  listLoadingContainer: {
    height: 90,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CryptDetailsScreen;
