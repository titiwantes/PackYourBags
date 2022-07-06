import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ButtonSocialNetwork from "../../components/button_social_networks/ButtonSocialNetworks";
import InputField from "../../components/Inputs/InputField";
import BigButton from "../../components/big_button/BigButton";

import TravelingImg from "../../../assets/gifs/traveling.gif";

import { SocialIcon } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import useKeyboard from "../../utils/KeyboardIsActive";
import { Link } from "@react-navigation/native";

const mainColor = "#fab3ff"

const Login = (props) => {

    const [userMail, setUserMail] = useState(String);
    const [userPassword, setUserPassword] = useState(String);

    const isKeyboardVisible = useKeyboard();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            {/* header: main title and storyset */}
            <View style={!isKeyboardVisible ? styles.headerContainer : {flex: 0}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.h1}>Bienvenue !</Text>
                    <Text style={styles.h2}>Connectez-vous pour continuer.</Text>
                </View>

                {
                    !isKeyboardVisible ?
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={TravelingImg}
                        />
                    </View> :
                    <View style={styles.emptyBox} />
                }
            </View>

            <View style={styles.widgetsContainer}>
                <View style={styles.inputsContainer}>
                    {/* Used to get the user email */}
                    <InputField
                        inputType="text"
                        onChangeText={(value) => setUserMail(value)}
                        inputText={userMail}
                        iconColor='gray'
                        inputLabel="Adresse email"
                        iconName="user"
                        iconSize={22}
                    />

                    {/* Used to get the user mail */}
                    <InputField
                        inputType="password"
                        secureTextEntry={true}
                        onChangeText={(value) => setUserPassword(value)}
                        inputText={userPassword}
                        inputLabel="Mot de passe"
                        iconColor="gray"
                        iconName="eye"
                        hideIcon="eye-slash"
                        iconSize={22}
                    />
                </View>

                <BigButton text="Connexion" width='100%' />

                {/* Don't have an account */}
                <View style={styles.notSignUpContainer}>
                    <Text style={{color: '#cfcfcf'}}>Tu n'as pas encore de compte ?</Text>
                    <Text>Inscrit-toi</Text>
                </View>

                {/* Social network buttons */}
                <View style={styles.networkContainer}>

                    <SocialIcon
                        style={styles.socialIcon}
                        type='google'
                    />
                    <SocialIcon
                        style={styles.socialIcon}
                        type='facebook'
                    />
                </View>

            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingBottom: 20,
        paddingTop: 50,
    },
    networkContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center'
    },
    headerContainer: {
        flex: 1
    },
    titleContainer: {

    },
    widgetsContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputsContainer: {
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    notSignUpContainer: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    image: {
        flex: 1,
        width: '95%',
    },
    h1: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    h2: {
        color: '#cfcfcf',
        fontSize: 16
    },
    socialIcon: {
        width: 60,
        height: 60
    },
    emptyBox: {
        margin: 20
    }
})

export default Login;