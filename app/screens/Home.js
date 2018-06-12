import React, { Component } from 'react';
import {
    View,
    StatusBar,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmout } from '../actions/currencies';

class Home extends Component {
    handlePressBaseCurrencty = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Base Currency',
            type: 'base'
        });
    };

    handlePressQuoteCurrencty = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Quote Currency',
            type: 'quote'
        });
    };

    handleChangeText = amount => {
        this.props.dispatch(changeCurrencyAmout(amount));
    };

    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency());
    };

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options');
    };

    render() {
        let quotePrice;

        if (this.props.isFetching) {
            quotePrice = '...';
        } else {
            quotePrice = (
                this.props.amount * this.props.conversionRate
            ).toFixed(2);
        }

        const safeViewStyles = [styles.safeView];
        if (this.props.primaryColor) {
            safeViewStyles.push({ backgroundColor: this.props.primaryColor });
        }

        return (
            <SafeAreaView style={safeViewStyles}>
                <Container backgroundColor={this.props.primaryColor}>
                    <StatusBar translucent={false} barStyle="light-content" />
                    <Header onPress={this.handleOptionsPress} />

                    <KeyboardAvoidingView behavior="padding">
                        <Logo />
                        <InputWithButton
                            buttonText={this.props.baseCurrency}
                            onPress={this.handlePressBaseCurrencty}
                            defaultValue={this.props.amount.toString()}
                            keyboardType="numeric"
                            onChangeText={this.handleChangeText}
                            textColor={this.props.primaryColor}
                        />
                        <InputWithButton
                            buttonText={this.props.quoteCurrency}
                            editable={false}
                            onPress={this.handlePressQuoteCurrencty}
                            value={quotePrice}
                            textColor={this.props.primaryColor}
                        />

                        <LastConverted
                            base={this.props.baseCurrency}
                            quote={this.props.quoteCurrency}
                            date={this.props.lastConvertedDate}
                            conversionRate={this.props.conversionRate}
                        />
                        <ClearButton
                            text="Reverse Currencies"
                            onPress={this.handleSwapCurrency}
                        />
                    </KeyboardAvoidingView>
                </Container>
            </SafeAreaView>
        );
    }
}

const styles = EStyleSheet.create({
    safeView: {
        backgroundColor: '$primaryColor',
        flex: 1
    }
});

const mapStateToProps = state => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date
            ? new Date(conversionSelector.date)
            : new Date(),
        primaryColor: state.theme.primaryColor
    };
};

export default connect(mapStateToProps)(Home);
