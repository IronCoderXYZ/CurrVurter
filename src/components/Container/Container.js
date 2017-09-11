import React, { PropTypes } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyle = [styles.container];
  if (backgroundColor) {
    containerStyle.push({ backgroundColor });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyle}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

Container.PropTypes = {
  children: PropTypes.any,
}

export default Container;
