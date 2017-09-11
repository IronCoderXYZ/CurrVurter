import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  handlePressBaseCurreny = () => {
    this.props.navigation.navigate('CurrencyList', {title: 'Base Currency',
    type: 'base'});
  }

  handlePressQuoteCurreny = () => {
    this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency',
    type: 'quote'});
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
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle='light-content' />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior='padding'>
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurreny}
            defaultValue={this.props.amount.toString()}
            keyboardType='numeric'
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
            />
          <InputWithButton
            textColor={this.props.primaryColor}
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
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(Home);
