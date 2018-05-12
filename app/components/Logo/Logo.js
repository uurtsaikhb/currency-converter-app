import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image source={require('./images/logo.png')} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>CURRENTY CONVERTER</Text>
    </View>
);

export default Logo;
