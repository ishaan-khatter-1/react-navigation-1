import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';

const Imagepicker = () => {
  const [uri, setUri] = useState('');
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setUri(image.path);
    });
  };
  return (
    <View>
      <View style={styles.slctbtnview}>
        <TouchableOpacity onPress={selectImage}>
          <Text style={styles.Text}> Select to view/Change image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgView}>
        <Image source={{uri: uri}} style={styles.img}></Image>
      </View>
    </View>
  );
};

export default Imagepicker;
