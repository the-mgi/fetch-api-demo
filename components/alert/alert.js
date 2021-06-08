import React from 'react';
import {Alert} from "react-native";

export const createTwoButtonAlert = ({title, message, onPressCancel, onPressOK}) => {
	return (
		Alert.alert(
			title,
			message,
			[
				{text: "Cancel", onPress: onPressCancel, style: "cancel"},
				{text: "OK", onPress: onPressOK}
			]
		)
	);
};
