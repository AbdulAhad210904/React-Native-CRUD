import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddUserScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = async () => {
    try {
      await axios.post('http://192.168.0.104:3000/user', { name, email });
      navigation.navigate('HomeList');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Add User" onPress={addUser} />
    </View>
  );
};

export default AddUserScreen;
