import React from 'react';
import {StyleSheet} from 'react-native';
import TodosListComponent from "./components/todos-list/todos-list.component";
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import TodoDetailsComponent from "./components/todo-details/todo-details.component";
import UserDetailsComponent from "./components/user-details/user-details.component";

export default function App() {
	const Stack = createStackNavigator();

	const StackHistoryLoginSignUp = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="todosList"
					component={TodosListComponent}
					options={{
						headerShown: true,
						headerTitle: "All Todos"
					}}
				/>
				<Stack.Screen
					name="todoDetails"
					component={TodoDetailsComponent}
					options={{
						headerShown: true,
						headerTitle: "Todo Details",
						headerLeft: HeaderBackButton
					}}
				/>
				<Stack.Screen
					name="userDetails"
					component={UserDetailsComponent}
					options={{
						headerShown: true,
						headerTitle: "User Details",
						headerLeft: HeaderBackButton
					}}
				/>
			</Stack.Navigator>
		);
	};

	return (
		<NavigationContainer>
			<StackHistoryLoginSignUp/>
		</NavigationContainer>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
