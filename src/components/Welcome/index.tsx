import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Welcome = () => {
  const navigator = useNavigation();
  const gotopages = () => {
    navigator.navigate('Button');
  };
  return (
    <View style={styles.design1}>
      {/* <Text>Welcome</Text> */}
      <TouchableOpacity onPress={gotopages}>
        <Text style={styles.textDesign}>Press Here to go to Pages Screen.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
