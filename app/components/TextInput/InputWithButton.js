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

    const buttonTextStyles = [styles.buttonText];
    const inputStyles = [styles.input];
    const borderStyles = [styles.border];

    if (props.textColor) {
        buttonTextStyles.push({ color: props.textColor });
        inputStyles.push({ color: props.textColor });
        borderStyles.push({ backgroundColor: props.textColor });
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight
                onPress={onPress}
                style={styles.buttonContainer}
                underlayColor={underlayColor}
            >
                <Text style={buttonTextStyles}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={borderStyles} />
            <TextInput style={inputStyles} {...props} />
        </View>
    );
};

export default InputWithButton;
