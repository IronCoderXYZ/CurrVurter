import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.75';

class Home extends Component {
  handlePressBaseCurreny = () => {
    console.log('handlePressBaseCurreny');
  }

  handlePressQuoteCurreny = () => {
    console.log('handlePressQuoteCurreny');
  }

  handleTextChange= (text) => {
    console.log(text);
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurreny}
          value={TEMP_BASE_PRICE}
          keyboardType='numeric'
          onChangeText={this.handleTextChange}
          />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurreny}
          editable={false}
          value={TEMP_QUOTE_PRICE}
          />
      </Container>
    );
  }
}

export default Home;
