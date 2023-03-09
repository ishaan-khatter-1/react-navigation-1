import {View, Text, TouchableOpacity, Button, Platform} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const Welcome = () => {
  const navigator = useNavigation();
  const gotopages = () => {
    navigator.navigate('Button');
  };

  const gotosignup = () => {
    navigator.navigate('Signup');
  };

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View style={styles.design1}>
        {/* <Text>Welcome</Text> */}
        <TouchableOpacity onPress={gotopages}>
          <Text style={styles.textDesign}>
            Press Here to go to Pages Screen.
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.design2}>
        <TouchableOpacity onPress={gotosignup}>
          <Text style={styles.text2}>Go To Sign Up Page.</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

export default Welcome;
