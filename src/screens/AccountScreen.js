import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'alwyas' }}>
      <Text>Account screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
