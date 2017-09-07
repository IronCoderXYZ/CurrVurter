import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = ({ checkmark, visible }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible)
  }

  return (
    <View style={ iconStyles }>
      {checkmark ?
        <Image style={styles.checkIcon}
          resizeMode='contain'
          source={require('./images/check.png')} />
      : null}
    </View>
  );
};

export default Icon;
