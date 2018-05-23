import React, { Component } from 'react';
import {
    View,
    StatusBar,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
    handlePressBaseCurrencty = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Base Currency'
        });
    };

    handlePressQuoteCurrencty = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Quote Currency'
        });
    };

    handleTextChange = text => {};

    handleSwapCurrency = () => {};

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options');
    };

    render() {
        return (
            <SafeAreaView style={styles.safeView}>
                <Container>
                    <StatusBar translucent={false} barStyle="light-content" />
                    <Header onPress={this.handleOptionsPress} />

                    <KeyboardAvoidingView behavior="padding">
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

                        <LastConverted
                            base={TEMP_BASE_CURRENCY}
                            quote={TEMP_QUOTE_CURRENCY}
                            date={TEMP_CONVERSION_DATE}
                            conversionRate={TEMP_CONVERSION_RATE}
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
export default Home;
