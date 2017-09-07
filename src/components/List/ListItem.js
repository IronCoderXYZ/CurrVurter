import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({
    text,
    onPress,
    selected=false,
    checkmark=true,
    visable=true,
    customIcon=null,
    iconBackground,
  }) => (
    <TouchableHighlight onPress={ onPress }>
      <View style={ styles.row }>
        <Text style={ styles.text }>{text}</Text>
        { selected ? <Icon checkmark={checkmark} visible={visable} iconBackground={iconBackground} /> : <Icon /> }
        {customIcon}
      </View>
    </TouchableHighlight>
);

export default ListItem;
