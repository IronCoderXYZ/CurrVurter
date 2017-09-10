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
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior='padding'>
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurreny}
            defaultValue={this.props.amount.toString()}
            keyboardType='numeric'
            onChangeText={this.handleTextChange}
            />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurreny}
            editable={false}
            value={quotePrice}
            />
            <LastConverted
              base={this.props.baseCurrency}
              quote={this.props.quoteCurrency}
              date={this.props.LastConvertedDate}
              conversionRate={this.props.conversionRate}
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

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {}

  return {
    baseCurrency,
    quoteCurrency,
    isFetching: conversionSelector.isFetching,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    LastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
  };
};

export default connect(mapStateToProps)(Home);
