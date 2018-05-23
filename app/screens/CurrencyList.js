import React, { Component } from 'react';
import { Text, FlatList, SafeAreaView, View, StatusBar } from 'react-native';
import currencies from '../data/currencies';

import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    renderItem = ({ item }) => {
        return (
            <ListItem
                text={item}
                selected={item === TEMP_CURRENT_CURRENCY}
                onPress={this.handlePress}
            />
        );
    };

    handlePress = () => {
        this.props.navigation.goBack(null);
    };

    render() {
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

export default CurrencyList;
