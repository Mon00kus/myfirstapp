import React from 'react';
import { View, StyleSheet } from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style = {[ styles.box, styles.box1]}/>
      <View style = {[ styles.box, styles.box2]}/>
      <View style = {[ styles.box, styles.box3]}/>
      <View style = {[ styles.box, styles.box4]}/>
      <View style = {[ styles.box, styles.box1]}/>
      <View style = {[ styles.box, styles.box2]}/>
      <View style = {[ styles.box, styles.box3]}/>
      <View style = {[ styles.box, styles.box4]}/>
      <View style = {[ styles.box, styles.box1]}/>
      <View style = {[ styles.box, styles.box2]}/>
      <View style = {[ styles.box, styles.box3]}/>
      <View style = {[ styles.box, styles.box4]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f40dbe',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    columnGap: 15,
  },
  box: {
    //flex: 1,
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#2e05c2',
  },
  box2:{
    backgroundColor: '#0a178c',
    //alignSelf: 'flex-end',
  },
  box3:{
    backgroundColor: '#160850',
  },
  box4:{
    backgroundColor: '#5b50f4',
  },
});
