import {View, Text, Pressable, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const [email, setEmail] = useState('');

  const saveEmail = async () => {
    await AsyncStorage.setItem('email', email);
    ToastAndroid.show('Email saved', ToastAndroid.SHORT);
  };

  const showEmail = async () => {
    const asyncEmail = await AsyncStorage.getItem('email');
    if (asyncEmail) {
      setEmail(asyncEmail);
    }
  };

  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.toptext}>Signup</Text>
      </View>
      <View>
        <TextInput
          style={styles.enterEmail}
          value={email}
          placeholder="Enter Email"
          onChangeText={setEmail}
        />
        <Pressable onPress={saveEmail} style={styles.saveEmailButton}>
          <Text style={styles.emailstyle}>Save Email</Text>
        </Pressable>
        <Pressable onPress={showEmail} style={styles.showEmailButton}>
          <Text style={styles.emailstyle}>Show Email</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
