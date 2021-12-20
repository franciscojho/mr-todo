
export const initialState = []

export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'TODO_ADD':
				return [
					...state,
					{
						id: action.payload.id,
						description: action.payload.description,
						isCompleted: false
					}
				];
			
		case 'TODO_DELETE':
				return state.filter(task => task.id !== action.payload.index);
		
		case 'TODO_COMPLETED':
				return state.map(task => task.id === action.payload.index ? { ...task, isCompleted: !task.isCompleted } : task);

		default:
				return state
	}
}
