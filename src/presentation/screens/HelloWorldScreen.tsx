import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface Props{
  texto?: string;
}

export const HelloWorldScreen = ({texto = 'World'}: Props) => {
  return (    
      <View style={styles.container}>
        <Text style={styles.title}>Texto original:</Text>
        <Text>{texto}</Text>

        <Text style={styles.title}>Texto limitado a 2 líneas:</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail" // ¡Esto es clave para los "..."!
          style={styles.limitedText}
        >
          {texto}
        </Text>

        <Text style={styles.title}>Texto limitado a 3 líneas (con otro estilo):</Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.anotherLimitedText}
        >
          {texto}
        </Text>
      </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  limitedText: {
    fontSize: 16,
    color: 'blue',
    width: '80%', // Es importante que el Text tenga un ancho definido o se ajuste al contenido
  },
  anotherLimitedText: {
    fontSize: 14,
    color: 'white',
    //lineHeight: 20, // A veces el lineHeight puede afectar cómo se calcula el número de líneas
    width: '90%',
  }
});