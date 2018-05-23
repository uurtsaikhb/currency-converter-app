import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.wrapper}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={require('./images/reverse.png')}
                />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ClearButton;
