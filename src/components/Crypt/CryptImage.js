import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import getCryptoIcon from '../../utils/getCryptoIcon';

const CryptImage = (props) => {
  const { iconStyle, symbol } = props;

  const [iconFailure, setIconFailure] = useState(false);
  return (
    <>
      {iconFailure ? (
        <Image
          style={iconStyle}
          source={require('../../assets/static/no-image.png')}
        />
      ) : (
        <Image
          style={iconStyle}
          source={{ uri: getCryptoIcon(symbol) }}
          onError={() => setIconFailure(true)}
        />
      )}
    </>
  );
};

export default CryptImage;
