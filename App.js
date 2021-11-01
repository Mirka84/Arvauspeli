import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() { 
   
  const [number, setNumber]=useState(0); 
  const [result]=useState((Math.floor(Math.random()*100)+1));
  const [text, setText]=useState('');
  const [count, setCount]=useState(0); 

  const buttonPressed = () => {

      setCount(count+1); 
    
    if (number > result){ 
      setText('Your guess ' + number + ' was too high, guess again');
     
    }

    else if (number < result){
      setText('Your guess ' + number + ' was too low, guess again'); 
 
    }

    else if (number == result){
      setText('Your guess was correct'); 
      Alert.alert('You guessed ' + count + ' times'); 
    }
  }


  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <View>
        <TextInput style={styles.input}
          onChangeText={number => setNumber(number)}
          value={number}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Button onPress={buttonPressed} title="Guess" />
      </View>
      <View>
        <Text>{text}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
