import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
// import {useNavigation} from @react-navigaton/native;
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Button = () => {
  const navigator = useNavigation();
  const gotopageone = () => {
    navigator.navigate('PageOne');
  };
  const gotopagetwo = () => {
    navigator.navigate('PageTwo');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => gotopageone()}>
        <Text style={styles.pageonestyle}>Go to First page.</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => gotopagetwo()}>
        <Text style={styles.pagetwostyle}>Go to Second page.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
