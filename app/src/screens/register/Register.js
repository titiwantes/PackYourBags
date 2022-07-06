import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ButtonSocialNetwork from "../../components/button_social_networks/ButtonSocialNetworks";
import InputField from "../../components/Inputs/InputField";
import BigButton from "../../components/big_button/BigButton";

import SuitcaseImg from "../../../assets/gifs/suitcase.gif";
import { SocialIcon } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import useKeyboard from "../../utils/KeyboardIsActive";

const mainColor = "#fab3ff"

const Register = (props) => {

    const [userFullName, setUserFullName] = useState(String);
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
                    <Text style={styles.h1}>Inscrivez-vous</Text>
                    <Text style={styles.h2}>Commencez votre départ avec nous</Text>
                </View>

                {
                    !isKeyboardVisible ?
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={SuitcaseImg}
                        />
                    </View> :
                    <View style={styles.emptyBox} />
                }
            </View>

            <View style={styles.widgetsContainer}>
                <View style={styles.inputsContainer}>
                    {/* Used to get the user name */}
                    <InputField
                        inputType="text"
                        onChangeText={(value) => setUserFullName(value)}
                        inputText={userFullName}
                        iconColor='gray'
                        inputLabel="Nom complet"
                        iconName="tags"
                        iconSize={22}
                    />

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

                <BigButton text="Inscription" width='100%' />

                                {/* Other means of connection */}
                <View style={styles.alreadySignInContainer}>
                    <Text style={{color: '#cfcfcf'}}>Tu n'as pas encore de compte ?</Text>
                    <Text>Inscrit-toi</Text>
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
    imageContainer: {
        flex: 1,
        alignItems: 'center',
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
        flex: 0.7,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    alreadySignInContainer: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    image: {
        flex: 1,
        width: '90%',
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
    emptyBox: {
        margin: 20
    }
})

export default Register;