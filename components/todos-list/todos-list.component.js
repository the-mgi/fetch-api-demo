import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import TodoItemComponent from "./todo-item/todo-item.component";
import {createTwoButtonAlert} from '../alert/alert';
import {Spinner} from "native-base";

const TODOS_END_POINT = 'https://jsonplaceholder.typicode.com/todos'
const TodosListComponent = ({navigation, route}) => {
	const [allTodos, setAllTodos] = useState([]);

	useEffect(() => {
		(async () => {
			fetch(TODOS_END_POINT)
				.then(response => {
					return response.json();
				})
				.then(json => {
					setAllTodos(json);
				})
				.catch(() => {
					createTwoButtonAlert({
						title: "An error Occurred",
						message: "Cannot fetch the TODOS data from server",
						onPressOK: () => {
						},
						onPressCancel: () => {
						}
					});
				})
		})();
	}, []);

	const openTodoDetails = (todoItem) => {
		navigation.navigate("todoDetails", {record: todoItem});
	};

	return (
		<>
			<View style={styles.container}>
				{allTodos.length > 0 ?
					<FlatList keyExtractor={item => item.key} data={allTodos} renderItem={
						({item}) => {
							return (
								<TouchableOpacity onPress={() => {openTodoDetails(item)}}>
									<View style={{marginTop: 10}}>
										<TodoItemComponent borderColor={item.completed ? "green" : "#d32f2f"} key={item.id} title={item.title}/>
									</View>
								</TouchableOpacity>
							);
						}
					}/> :
					<Spinner color='blue'/>}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#ffffff"
	}
});

export default TodosListComponent;
