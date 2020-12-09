import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import {
  addFavoriteAction,
  removeFavoriteAction,
} from '../../redux/actions/favoritesAction';

const SaveButton = (props) => {
  const { crypt } = props;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setInitialState();
  }, []);

  const setInitialState = () => {
    const currentCryptFavorite = favorites.find((item) => item.id === crypt.id);
    if (currentCryptFavorite) {
      setIsSaved(true);
    }
  };

  const saveCrypt = () => {
    dispatch(addFavoriteAction(crypt));
    setIsSaved(true);
  };

  const removeCrypt = () => {
    dispatch(removeFavoriteAction(crypt.id));
    setIsSaved(false);
  };

  const handleSaveButton = () => {
    if (!isSaved) {
      saveCrypt();
    } else {
      removeCrypt();
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
