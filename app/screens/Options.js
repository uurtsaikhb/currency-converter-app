import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 24;

class Options extends Component {
    handleThemesPress = () => {
        this.props.navigation.navigate('Themes');
    };

    handleSitePress = () => {
        Linking.openURL('http://uurtsaikh.com/projects').catch(() =>
            alert('error occurred')
        );
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <StatusBar barStyle="default" translucent={false} />

                    <ListItem
                        text="Themes"
                        onPress={this.handleThemesPress}
                        customIcon={
                            <Ionicons
                                name="ios-arrow-forward"
                                color={ICON_COLOR}
                                size={ICON_SIZE}
                            />
                        }
                    />
                    <Separator />
                    <ListItem
                        text="uurtsaikh.com"
                        onPress={this.handleSitePress}
                        customIcon={
                            <Ionicons
                                name="ios-link"
                                color={ICON_COLOR}
                                size={ICON_SIZE}
                            />
                        }
                    />
                    <Separator />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Options;
