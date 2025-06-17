import React from 'react';
import { View, StyleSheet } from 'react-native';

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}/>
      <View style={[styles.box, styles.orangeBox]}/>
      <View style={[styles.box, styles.blueBox]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    // Primeras 3 tareas. justifyContent: 'center',
    // Tarea 4. justifyContent: 'space-between',
    // Tarea 6justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //Primeras 5 tareas alignItems: 'center',
    //Primeras 5 tareas flexDirection: 'row',
  },
  box: {
    //Primeras 6 width: 100,
    //Primeras 6 height: 100,
    //Tarea 5. height: '100%',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#e541e8',
    //tarea 9. top: 100,
    //Tarea 4. alignSelf: 'flex-end',
    //Tarea 6. flex: 2,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    top: 50,
    //Tarea 9. right: -100,
    //Tarea 1. flex: 1, linea tres colores cuadros pegados a la izquierda la del medio mas larga
    //Tarea 3. alignSelf: 'flex-end',
    //Tarea 6. flex: 2,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    // Tarea 2. width: '100%' Linea tres colores centrada, ultima ocupa toda el spacio,
    // Tarea 3. alignSelf: 'center',
    // Tarea 4. alignSelf: 'flex-start',
    // Tarea 6. flex: 5,
  },
});
