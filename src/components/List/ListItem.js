import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({
    text, onPress, selected=false, checkmark=true, visable=true, customIcon=null }) =>
  (
    <TouchableHighlight onPress={ onPress }>
      <View style={ styles.row }>
        <Text style={ styles.text }>{text}</Text>
        { selected ? <Icon checkmark={checkmark} visible={visable} /> : <Icon /> }
        {customIcon}
      </View>
    </TouchableHighlight>
);

export default ListItem;
