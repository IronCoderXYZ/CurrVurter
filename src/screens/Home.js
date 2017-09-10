import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.75';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  handlePressBaseCurreny = () => {
    this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
  }

  handlePressQuoteCurreny = () => {
    this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
  }

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options', {title: 'Options'});
  }

  handleTextChange = (text) => {
    this.props.dispatch(changeCurrencyAmount(text));
  }

  handleSwap = () => {
    this.props.dispatch(swapCurrency());
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior='padding'>
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
            <LastConverted
              base={TEMP_BASE_CURRENCY}
              quote={TEMP_QUOTE_CURRENCY}
              date={TEMP_CONVERSION_DATE}
              conversionRate={TEMP_CONVERSION_RATE}
            />
            <ClearButton
              text='Reverse Currencies'
              onPress={this.handleSwap}
            />
          </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connect()(Home);
