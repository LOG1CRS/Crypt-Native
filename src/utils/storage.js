import AsyncStorage from '@react-native-community/async-storage';

export const updateFavoritesCrypts = async (crypts) => {
  try {
    const cryptsString = JSON.stringify(crypts);
    await AsyncStorage.setItem('favorites', cryptsString);
  } catch (err) {
    console.log('Storage remove: ', err);
    return false;
  }
};

export const getFavoritesCrypts = async () => {
  try {
    const cryptsString = await AsyncStorage.getItem('favorites');
    const crypts = JSON.parse(cryptsString);
    return crypts;
  } catch (err) {
    console.log('Storage get: ', err);
    throw Error(err);
  }
};
