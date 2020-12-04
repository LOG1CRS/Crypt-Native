import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { saveItem, removeItem, getItem } from '../../utils/storage';

const SaveButton = (props) => {
  const { crypt } = props;
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    getFavorites();
  }, []);

  const saveCrypt = async (key) => {
    const cryptToSave = JSON.stringify(crypt);
    const stored = await saveItem(key, cryptToSave);

    if (stored) {
      console.log('stored', stored);
      setIsSaved(true);
    }
  };

  const removeCrypt = async (key) => {
    const removed = await removeItem(key);

    if (removed) {
      console.log('removed', removed);
      setIsSaved(false);
    }
  };

  const getFavorites = async () => {
    const key = `favorite-${crypt.id}`;
    try {
      const favorites = await getItem(key);

      if (favorites !== null) {
        setIsSaved(true);
      }
    } catch (err) {
      console.log('Get favorites: ', err);
    }
  };

  const handleSaveButton = () => {
    const key = `favorite-${crypt.id}`;
    if (!isSaved) {
      saveCrypt(key);
    } else {
      removeCrypt(key);
    }
  };

  return (
    <Pressable style={styles.saveButton} onPress={handleSaveButton}>
      {!isSaved ? (
        <Ionicons name="ios-heart-empty" size={28} color="white" />
      ) : (
        <Ionicons name="ios-heart" size={28} color="white" />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    marginRight: 22,
  },
});

export default SaveButton;
