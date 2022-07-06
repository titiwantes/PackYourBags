import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import PropTypes from "prop-types";

import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { Icon } from "react-native-elements";

const InputField = (props) => {

    let secureTextEntry = (props.secureTextEntry ? true : false);
    const [visibility, setVisibility] = useState(secureTextEntry);

    return (
        <View style={styles.container}>
            <TextInput
                label={props.inputLabel}
                color="gray"
                variant="standard"
                style={{width: '100%'}}
                secureTextEntry={!visibility ? false : true}
                onChangeText={(value) => props.onChangeText(value)}
                value={props.inputText}
                trailing={
                    <Icon
                        name={secureTextEntry ? (visibility ? props.hideIcon : props.iconName) : props.iconName}
                        type='font-awesome'
                        color={props.iconColor}
                        size={props.iconSize}
                        {...(secureTextEntry ? {onPress: () => setVisibility(!visibility)} : {})}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
    },
    input: {
        width: '80%',
        fontSize: 14,
        padding: 20,
        borderWidth: 0,
    },
    iconContainer: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
});

InputField.propTypes = {
        /** A string value representing the input type (password or text) */
        inputType: PropTypes.string,
        /** An handleChange function used to change the input value */
        onChangeText: PropTypes.func,
        /** A string value representing the input value */
        inputText: PropTypes.string,
        /** An hexadecimal value representing the icon color */
        iconColor: PropTypes.string,
        /** A string value representing the input Label */
        inputLabel: PropTypes.string,
        /** A string value representing the icon name */
        iconName: PropTypes.string,
        /** Only used if the inputType is "password":
         * A string value representing the hide icon, when the password is hide */
        hideIcon: PropTypes.string,
        /** A number value representing the icon size */
        iconSize: PropTypes.number,
        /** Defined if the input is a password input or not */
        secureTextEntry: PropTypes.bool
}

export default InputField;