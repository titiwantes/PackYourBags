import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

const ButtonSocialNetwork = ({iconName, iconColor, iconSize}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Icon
                name={iconName}
                type="font-awesome"
                color={iconColor}
                size={iconSize}
            />    
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

ButtonSocialNetwork.propTypes = {
    /** An hexadecimal value representing the icon color */
    iconColor: PropTypes.string,
    /** A string value representing the icon name */
    iconName: PropTypes.string,
    /** A number value representing the icon size */
    iconSize: PropTypes.number,
}

export default ButtonSocialNetwork;