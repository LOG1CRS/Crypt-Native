import React, { memo } from 'react';
import { Pressable, View, Text, StyleSheet, Image } from 'react-native';

import colors from '../../assets/style/colors';
import CryptImage from './CryptImage';

const CryptItem = memo((props) => {
  const { crypto, onPress } = props;

  const getArrow = () => {
    if (crypto.percent_change_1h > 0) {
      return require('../../assets/static/arrow_up.png');
    } else {
      return require('../../assets/static/arrow_down.png');
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.item}>
      <View style={styles.iconContainer}>
        <CryptImage iconStyle={styles.cryptIcon} symbol={crypto.symbol} />
        <View>
          <Text style={styles.symbolText}>{crypto.symbol}</Text>
        </View>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>{`${crypto.price_usd}$`}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Text style={styles.percentText}>{crypto.percent_change_1h}</Text>
        <Image style={styles.arrowIcon} source={getArrow()} />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    margin: 9,
    paddingBottom: 18,
    borderBottomColor: 'rgba(224, 224, 224, 0.3)',
    borderBottomWidth: 1,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  arrowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  price: {
    flexGrow: 1,
  },
  symbolText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17,
    // marginRight: 20,
  },
  priceText: {
    color: colors.white,
    fontSize: 14,
    // marginLeft: 60,
  },
  percentText: {
    color: colors.white,
    fontSize: 12,
    marginRight: 8,
  },
  arrowIcon: {
    width: 22,
    height: 22,
  },
  cryptIcon: {
    width: 30,
    height: 30,
    marginLeft: -8,
    marginRight: 10,
  },
});

export default CryptItem;
