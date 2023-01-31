import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../util/colors';

const NewsScreen = () => {
  return <SafeAreaView style={[styles.container]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {margin: 16},
});

export {NewsScreen};
