import { combineReducers } from 'redux';
// import todos from './todos';
import Todos from './Todos'
// import visibilityFilter from './visibilityFilter';
import VisibilityFilter from './VisibilityFilter'

const RootReducer = combineReducers({
    Todos,
    VisibilityFilter
});

export default RootReducer;
