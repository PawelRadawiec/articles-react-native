import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export const RateThumbs = ({ rating, ratingUp, ratingDown, loading }) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={styles.spinner}
          size="small"
          color="#3b5998"
        />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              ratingUp();
            }}
          >
            <MaterialIcons name="thumb-up" size={24} color="green" />
          </TouchableOpacity>
          <Text style={styles.ratingCount}>
            {rating?.positive ? rating?.positive : 0}
          </Text>
          <TouchableOpacity
            onPress={() => {
              ratingDown();
            }}
          >
            <MaterialIcons name="thumb-down" size={24} color="red" />
          </TouchableOpacity>
          <Text style={styles.ratingCount}>
            {rating?.negative ? rating?.negative : 0}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  ratingCount: {
    marginHorizontal: 5,
  },
  spinner: {
    marginHorizontal: 25,
  },
});

export default RateThumbs;
