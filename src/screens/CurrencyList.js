import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import currencies from '../data/currencies';
import { ListItem, Seperator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  handlePress = () => {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='default' translucent={false} />
        <FlatList
          data={currencies}
          renderItem={ ({ item }) => (
            <ListItem
              text={item}
              selected={ item === TEMP_CURRENT_CURRENCY }
              onPress={this.handlePress}
              />
          )}
          keyExtractor={ (item) => item }
          ItemSeparatorComponent={ Seperator }
          />
      </View>
    );
  }
}

export default CurrencyList;
