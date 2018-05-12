import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';
import styles from './styles';

const InputWithButton = props => {
    const { onPress, buttonText, editable = true } = props;

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(0.1);

    const containerStyles = [styles.container];

    if (editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight
                onPress={onPress}
                style={styles.buttonContainer}
                underlayColor={underlayColor}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} {...props} />
        </View>
    );
};

export default InputWithButton;
