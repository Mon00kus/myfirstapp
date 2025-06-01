import { StyleSheet, View, Text } from 'react-native';
//import { PrimaryButton } from '../components';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10)
  return (
    <View style = {styles.container}>
      <Text style = { styles.title }>
        { counter }
      </Text>
      {/* <PrimaryButton
          label = 'Incrementar'
          onPress = { () => setCounter(counter + 1) }
          onLongPress = { ()=> setCounter(0) }
      /> */}
      <Button
        onPress = {()=>setCounter(counter + 1)}
        onLongPress = {()=>setCounter(0)}
        icon="camera" mode="contained"
      >
        Press Me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 80,
      fontWeight: '300',
    }
  });