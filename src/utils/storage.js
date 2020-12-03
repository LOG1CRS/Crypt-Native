import AsyncStorage from '@react-native-community/async-storage';

export const saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (err) {
    console.log('Storage store: ', err);
    return false;
  }
};

export const getItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (err) {
    console.log('Storage get: ', err);
    throw Error(err);
  }
};

export const multiGetItem = async (keys) => {
  try {
    return await AsyncStorage.multiGet(keys);
  } catch (err) {
    console.log('Storage multiGet: ', err);
    throw Error(err);
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    console.log('Storage remove: ', err);
    return false;
  }
};

export const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (err) {
    console.log('Storage getAllKeys: ', err);
    throw Error(err);
  }
};
