import { View } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import { globalStyles } from '../themes/global.styles';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style= { globalStyles.centerContainers }>CounterM3Screen
      <Text style = { globalStyles.title }>{ counter }</Text>
      <Icon name="accessibility-outline" size={ 25 }/>
      <FAB
       // label="1"
        onPress={()=>setCounter(counter + 1)}
        onLongPress={()=>setCounter(0)}
        style={ globalStyles.fab }
        icon={ () => <Icon name ="add-outline" size={ 25 } /> }
      />
    </View>
  );
};