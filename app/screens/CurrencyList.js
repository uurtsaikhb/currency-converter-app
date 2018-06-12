import React, { Component } from 'react';
import { Text, FlatList, SafeAreaView, View, StatusBar } from 'react-native';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import { connect } from 'react-redux';
import { ListItem, Separator } from '../components/List';

let comparisonCurrency;
class CurrencyList extends Component {
    renderItem = ({ item }) => {
        return (
            <ListItem
                text={item}
                selected={item === comparisonCurrency}
                onPress={() => this.handlePress(item)}
                iconBackground={this.props.primaryColor}
            />
        );
    };

    handlePress = currency => {
        const { type } = this.props.navigation.state.params;
        if (type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency));
        } else if (type === 'quote') {
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        this.props.navigation.goBack(null);
    };

    render() {
        comparisonCurrency = this.props.baseCurrency;
        if (this.props.navigation.state.params.type === 'quote') {
            comparisonCurrency = this.props.quoteCurrency;
        }

        return (
            <SafeAreaView>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={this.renderItem}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        baseCurrency: state.currencies.baseCurrency,
        quoteCurrency: state.currencies.quoteCurrency,
        primaryColor: state.theme.primaryColor
    };
};

export default connect(mapStateToProps)(CurrencyList);
