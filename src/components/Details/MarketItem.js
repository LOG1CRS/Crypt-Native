import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/style/colors';

const MarketItem = (props) => {
  const { item } = props;
  return (
    <View key={item.key} style={styles.marketItem}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price_usd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  marketItem: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderColor: colors.zircon,
    borderWidth: 0.7,
    padding: 20,
    marginRight: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  nameText: {
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceText: {
    color: colors.white,
  },
});

export default MarketItem;
