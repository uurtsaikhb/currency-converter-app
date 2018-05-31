import React, { Component } from 'react';
import { View, Image, Text, Keyboard, Animated } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;
class Logo extends Component {
    constructor(props) {
        super(props);

        this.imageWith = new Animated.Value(styles.$largeImageSize);
    }

    componentDidMount() {
        this.keyboardShowListener = Keyboard.addListener(
            'keyboardWillShow',
            this.keyboardShow
        );
        this.keyboardHideListener = Keyboard.addListener(
            'keyboardWillHide',
            this.keyboardHide
        );
    }

    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () => {
        Animated.timing(this.imageWith, {
            toValue: styles.$smallImageSize,
            duration: ANIMATION_DURATION
        }).start();
    };

    keyboardHide = () => {
        Animated.timing(this.imageWith, {
            toValue: styles.$largeImageSize,
            duration: ANIMATION_DURATION
        }).start();
    };

    render() {
        const imageStyle = [
            styles.image,
            {
                width: this.imageWith,
                height: this.imageWith
            }
        ];

        return (
            <View style={styles.container}>
                <Animated.Image
                    source={require('./images/logo.png')}
                    style={imageStyle}
                    resizeMode="contain"
                />
                <Text style={styles.text}>CURRENTY love ya </Text>
            </View>
        );
    }
}

export default Logo;
