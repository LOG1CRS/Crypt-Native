const getCryptoIcon = (cryptName) => {
  let symbol = cryptName.toLowerCase();

  if (symbol === 'bchsv') {
    symbol = 'bsv';
  } else if (symbol === 'nem') {
    symbol = 'xem';
  } else if (symbol === 'iota') {
    symbol = 'miota';
  } else if (symbol === 'husd') {
    symbol = 'hush';
  } else if (symbol === 'dai') {
    symbol = 'sai';
  }

  return `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@66d20453c8add12a8555d3822fa6983383cb9562/128/icon/${symbol}.png`;
};

export default getCryptoIcon;
