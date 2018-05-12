import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '78.23';

class Home extends Component {
    handlePressBaseCurrencty = () => {};

    handlePressQuoteCurrencty = () => {};

    handleTextChange = text => {
        alert('changed');
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrencty}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleTextChange}
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    editable={false}
                    onPress={this.handlePressQuoteCurrencty}
                    value={TEMP_QUOTE_PRICE}
                />
            </Container>
        );
    }
}

export default Home;
