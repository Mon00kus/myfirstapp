import { Platform, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  centerContainers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: 'black',
  },
  fab:{
    position: 'absolute',
    borderRadius: 20,
//    shadowRadius: 20,
    margin: 26,
    right: 0,
    bottom: Platform.OS === 'android' ? 15 : 0,
    // Sombra para Android
    ...Platform.select({
      android: {
        elevation: 5, // Valor de elevación para Android (simula la sombra)
      },
      // Sombra para iOS
      ios: {
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra (horizontal, vertical)
        shadowOpacity: 0.25, // Opacidad de la sombra (0 a 1)
        shadowRadius: 3.84, // Radio de desenfoque de la sombra
      },
    }),
  },
});