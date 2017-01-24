module.exports = {

	ADD_TODO: 'ADD_TODO',
	COMPLETE_TODO :'COMPLETE_TODO',
	DELETE_TODO : 'DELETE_TODO',


	addTodo: function(text, id) {
		return {
			type: 'ADD_TODO',
			text,
			id
		}
	},

	completeTodo: function(index) {
		return {
			type: 'COMPLETE_TODO',
			index
		}
	},

	deleteTodo: function(index){
		return {
			type: 'DELETE_TODO',
			index
		}
	}
}