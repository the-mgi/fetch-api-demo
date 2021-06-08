import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from "react-native";
import {Spinner, Text, View} from "native-base";
import {createTwoButtonAlert} from "../alert/alert";

const USER_BASE_URL = 'https://jsonplaceholder.typicode.com/users/'
const TodoDetailsComponent = ({navigation, route}) => {
	const {record} = route.params;
	const {height} = useWindowDimensions();
	const [userRecord, setUserRecord] = useState(undefined);

	useEffect(() => {
		(async () => {
			fetch(`${USER_BASE_URL}${record.userId}`)
				.then(response => {
					return response.json();
				})
				.then(json => {
					setUserRecord(json);
				})
				.catch(() => {
					createTwoButtonAlert({
						title: "An error Occurred",
						message: "Cannot fetch the User data from server",
						onPressOK: () => {
						},
						onPressCancel: () => {
						}
					});
				});
		})();
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: record.title.split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ")
		});
	}, [navigation]);

	const navigateToEmployeeDetails = () => {
		navigation.navigate("userDetails", {record: userRecord});
	};

	return (
		<>
			<View style={{...styles.mainContainer, height: height}}>
				{userRecord ? (
					<View style={styles.dataContainer}>
						<View style={styles.singleContainer}>
							<Text style={styles.text}>Title</Text>
							<Text
								style={styles.textualData}>{record.title.split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ")}</Text>
						</View>
						<View style={styles.singleContainer}>
							<Text style={styles.text}>Completion Status</Text>
							<Text style={styles.textualData}>{record.completed ?
								<View style={styles.completed}><Text style={styles.whiteColor}>Completed</Text></View> :
								<View style={styles.unComplete}><Text style={styles.whiteColor}>Not Completed</Text></View>}</Text>
						</View>
						<View style={styles.singleContainer}>
							<Text style={styles.text}>Username</Text>
							<Text onPress={navigateToEmployeeDetails}
										style={styles.textualData}>{userRecord.username.split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ")}</Text>
						</View>
					</View>
				) : <Spinner color='blue'/>}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#ffffff",
		padding: 10,
		alignItems: "center",
		paddingTop: 50
	},
	dataContainer: {
		flexDirection: "column"
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
	completed: {
		padding: 10,
		borderRadius: 4,
		backgroundColor: "green",
	},
	unComplete: {
		padding: 10,
		borderRadius: 4,
		backgroundColor: "#d32f2f",
	},
	whiteColor: {
		color: "#ffffff"
	}
});

export default TodoDetailsComponent;
