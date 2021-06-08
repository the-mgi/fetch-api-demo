import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions } from "react-native";

const TodoItemComponent = ({title, borderColor}) => {
	const windowWidth = useWindowDimensions().width;
	return (
		<>
			<View>
				<View style={{...styles.card, width: windowWidth - 20, borderColor: borderColor}}>
					<Text style={styles.text}>{title.split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ")}</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#FAFAFA",
		height: 80,
		borderRadius: 10,
		justifyContent: "center",
		paddingLeft: 20,
		borderWidth: 1,
		borderColor: "#9a9797",
	},
	text: {
		fontSize: 16,
	}
});

export default TodoItemComponent;
