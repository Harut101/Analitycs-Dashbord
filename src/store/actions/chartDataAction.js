import axios from 'axios';


export function getChartData(){
    return (dispatch) => {
        axios.get('https://analytics-59229.firebaseio.com/right-panel-data.json').then(response =>{
           
           dispatch(addData(response.data['-LgOXfWzupbYs5fb7noU'].analytics))
        })
    }
}


function addData(charterCordinats){
    return{
        type : 'ADD_CHART_DATA',
        payload : {
           data: charterCordinats
        }
    }
}