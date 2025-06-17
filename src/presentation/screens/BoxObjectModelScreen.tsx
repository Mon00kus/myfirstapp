import { View, StyleSheet, Text } from 'react-native';
/* import { Text } from 'react-native-paper'; */

export const BoxObjectModelScreen = () => {
  return (
    <View style= {styles.container}>
      {/* <Text style= {styles.title}>  BoxObjectScreen </Text> */}
      <View style= {styles.purpleBox}>
         <Text style={{color: 'white'}}>Hola mundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 30,
  },
  title: {
    fontSize: 40,
    paddingHorizontal: 30,
    paddingVertical: 80,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 50,
    padding:5,
  },
});
