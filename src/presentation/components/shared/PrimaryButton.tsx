import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress } : Props) => {
  return (
    <Pressable
       onPress={ () => onPress && onPress() }
       onLongPress={ () => onLongPress && onLongPress() }
       style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
       ]}
      >
      <Text style={styles.buttonText}>
         { label }
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({  
  // estilo para el texto del botón
  buttonText: {
    fontSize: 30,
    color: Platform.OS === 'android' ? 'white' : 'yellow', // texto de los botones es blanco o amarillo
    // centramos el texto dentro del botón
    textAlign: 'center',
    textAlignVertical: 'center', // Para centrar verticalmente en Android
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4647AB' : 'black'
  }
});