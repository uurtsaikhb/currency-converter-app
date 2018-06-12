import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { CHANGE_PRIMARY_COLOR, changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
    $blue: '$primaryColor',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple'
});

class Themes extends Component {
    handleThemePress = color => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar barStyle="default" translucent={false} />
                    <ListItem
                        text="Blue"
                        onPress={() => this.handleThemePress(styles.$blue)}
                        selected
                        checkmark={false}
                        iconBackground={styles.$blue}
                    />
                    <Separator />

                    <ListItem
                        text="Green"
                        onPress={() => this.handleThemePress(styles.$green)}
                        selected
                        checkmark={false}
                        iconBackground={styles.$green}
                    />
                    <Separator />

                    <ListItem
                        text="Orange"
                        onPress={() => this.handleThemePress(styles.$orange)}
                        selected
                        checkmark={false}
                        iconBackground={styles.$orange}
                    />
                    <Separator />

                    <ListItem
                        text="Purple"
                        onPress={() => this.handleThemePress(styles.$purple)}
                        selected
                        checkmark={false}
                        iconBackground={styles.$purple}
                    />
                    <Separator />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default connect()(Themes);
