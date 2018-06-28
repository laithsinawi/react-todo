import { VisibilityFilters } from '../actions';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const VisibleTodos = (todos, filter) => {
    
    switch(filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_ACTIVE:
            return todos.filter( todo => !todo.completed );
        case SHOW_COMPLETED:
            return todos.filter( todo => todo.completed);
        default:
            return todos;          
    }
}

export default VisibleTodos;