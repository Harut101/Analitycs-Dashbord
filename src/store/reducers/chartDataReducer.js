const initialState = {
    allDataRight: null,
    sourceDataRight: [
      [1518469200000, 51.13], 
      [1518555600000, 49.1], 
      [1518642000000, 50.54],  
      [1518728400000, 54.66],
      [1518814800000, 70.3],
      [1518901200000, 69.89],
      [1518987600000, 49.71]
    ]
 }
 
 
 export default function chartReducer(state = initialState, action){
    switch(action.type){
        case "ADD_CHART_DATA" :
            return{
                ...state,
                allDataRight: action.payload.data
            }

            
            case "Average_Time" :
                return{
                    ...state,
                    sourceDataRight: state.allDataRight[action.payload.value]
                }
    
            case "Bounce_Rate" :
                return{
                    ...state,
                    sourceDataRight: state.allDataRight[action.payload.value]
                }
                    
            case "Sessions" :
                return{
                    ...state,
                    sourceDataRight: state.allDataRight[action.payload.value]
                }  
    
        default:
        return state
    }

}