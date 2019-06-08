const initialState = {
    allDataLeft: [],
    filterSource: 'average_time'
 }
 
 
 export default function listReducer(state = initialState, action){
     switch(action.type){
             case "ADD_DATA" :
                 return{
                     ...state,
                     allDataLeft: action.payload.data
                 }
 
             case "Average_Time" :
                 return{
                     ...state,
                     filterSource: action.payload.value
                 }
     
             case "Bounce_Rate" :
                 return{
                     ...state,
                     filterSource: action.payload.value
                 }
                     
             case "Sessions" :
                 return{
                     ...state,
                     filterSource: action.payload.value
                 }  
         default:
         return state
     }
 
 }