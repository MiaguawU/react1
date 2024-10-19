import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput } from 'react-native';


const App = () => {


  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={style.container}>
      <Image source={{ uri: 'https://picsum.photos/200/200' }}
        style={style.image} />
      <View style={style.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={style.button} onPress={onPress}
      >
        <Text style={style.buttonText}>Presiona aqui</Text>
      </TouchableOpacity>

    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peach',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 30 },
  image: { height: 200, width: 200 },
  button: { backgroundColor: "orange", padding: 7, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 20 },
  countContainer: { color: 'blue' }

});

export default App;
