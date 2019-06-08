import axios from 'axios';


export function getData(){
    return (dispatch) => {
        axios.get('https://analytics-59229.firebaseio.com/left-panel-data.json').then(response =>{
            let filteredData = [];
            response.data['-LgOWIlAETK9zr0a9jqo'].forEach(element => {
                if(element.utm_sourcemedium !== ''){
                    filteredData.push(element)
                }
            });

            dispatch(addData(filteredData))
        })
    }
}


function addData(list){
    return{
        type : 'ADD_DATA',
        payload : {
           data: list
        }
    }
}


export function getDataSource(value){
  return (dispatch) => {
    switch(value){
        case "Время" :
            dispatch(getDataTime());
        break;
        case "Отказы" :
            dispatch(getDataBounceRate());

        break;        
        case "Сессии" :
            dispatch(getDataSessions());
        break;    
        default:
        return 'Average_Time'
    }
 }
}

function getDataTime(){
    return{
        type : 'Average_Time',
        payload : {
           value: 'average_time'
        }
    }
}


function getDataBounceRate(){
    return{
        type : 'Bounce_Rate',
        payload : {
            value: 'bounce_rate'
        }
    }
}


function getDataSessions(){
    return{
        type : 'Sessions',
        payload : {
            value: 'sessions'
        }
    }
}