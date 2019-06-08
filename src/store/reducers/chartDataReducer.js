const initialState = {
    allDataRight: null,
    sourceDataRight: [
         [1518469200000, 223.7],
         [1518555600000, 337.92],
         [1518642000000, 287.51],
         [1518728400000, 208.95],
         [1518814800000, 95.22],
         [1518901200000, 65.62],
         [1518987600000, 275.72]
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