import React, { useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { StyleSheet } from "react-native";
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';

export default function App() {

	const [text, setText] = useState("");

	const handleChange = (new_text) => {
		setText(new_text);
	}

	return (
		<View style={AppStyle.mainContainer}>
			<Login />
		</View>
	);
}

const AppStyle = StyleSheet.create({
	mainContainer : {
		backgroundColor: "white",
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
});