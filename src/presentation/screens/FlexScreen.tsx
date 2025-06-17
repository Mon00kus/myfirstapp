import React from 'react';
import { View, StyleSheet } from 'react-native';

interface FlexScreenProps {}

export const FlexScreen = ({}: FlexScreenProps) => {
  return (
    <View style={styles.container}>
      <View style = { [styles.box, styles.box1] }/>
      <View style = { [styles.box, styles.box2] }/>
      <View style = { [styles.box, styles.box3] }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec04c6',
    //justifyContent: 'space-around',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection : 'row',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1 : {
    backgroundColor: '#9097f5',
    top: 100,
  },
  box2 : {
    backgroundColor: '#2c22c3',
  },
  box3 : {
    backgroundColor: '#192d76',
    top: -100,
  },
});
