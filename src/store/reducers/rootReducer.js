import {combineReducers} from 'redux';
import listReducer from './listDataReducer'
import chartReducer from './chartDataReducer'


export default combineReducers({
    listReducer,
    chartReducer
})