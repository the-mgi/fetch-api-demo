import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, useWindowDimensions, ScrollView} from "react-native";

const UserDetailsComponent = ({navigation, route}) => {
	const {record} = route.params;
	const {height} = useWindowDimensions();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: record.name
		});
	}, [navigation]);

	return (
		<>
			<View style={{...styles.container, height: height}}>
				<ScrollView>
					{Object.keys(record).map((key, index) => {
						return (
							key !== "address" && key !== "company" && key !== "id" ? <View style={styles.singleContainer} key={index}>
								<Text style={styles.text}>{key[0].toUpperCase() + key.substr(1)}</Text>
								<Text
									style={styles.textualData}>{record[key]}</Text>
							</View> : null
						);
					})}
					<View style={styles.horizontalLine}/>
					<View style={{marginTop: 20}}>
						<Text style={{fontSize: 20, fontWeight: "bold"}}>Address</Text>
					</View>
					{Object.keys(record.address).map((key, index) => {
						return (
							key !== "geo" ? <View style={styles.singleContainer} key={index}>
								<Text style={styles.text}>{key[0].toUpperCase() + key.substr(1)}</Text>
								<Text
									style={styles.textualData}>{record.address[key]}</Text>
							</View> : null
						);
					})}
					<View style={styles.horizontalLine}/>
					<View style={{marginTop: 20}}>
						<Text style={{fontSize: 20, fontWeight: "bold"}}>Company Info</Text>
					</View>
					{Object.keys(record.company).map((key, index) => {
						return (
							<View style={styles.singleContainer} key={index}>
								<Text style={styles.text}>{key[0].toUpperCase() + key.substr(1)}</Text>
								<Text
									style={styles.textualData}>{record.company[key]}</Text>
							</View>
						);
					})}
				</ScrollView>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
	},
	singleContainer: {
		flexDirection: "row",
		marginTop: 10
	},
	text: {
		width: 150,
		fontSize: 22,
		fontWeight: "bold"
	},
	textualData: {
		width: 200,
		fontSize: 20
	},
	horizontalLine: {
		width: 100,
		borderWidth: 1,
		borderColor: "#9e9a9a",
		marginTop: 50
	}
});

export default UserDetailsComponent;
