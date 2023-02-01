import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  text: string;
}

const EmptyView: React.FC<Props> = ({text = ''}) => {
  return (
    <View style={styles.emptyView}>
      <Text style={styles.emptyText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 24,
    marginTop: 80,
    marginHorizontal: 24,
    textAlign: 'center',
  },
  emptyView: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmptyView;
