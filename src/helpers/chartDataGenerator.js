
export function chartDataGenerator(date , data){
    let chartData = [];
    let nextDate =  date;
    let amt = 1060;
    
    for(let i = 0; i < data.length; ++i ){
    
       let nextDateFormat = `${new Date(nextDate).getDate()}.${new Date(nextDate).getMonth() + 1}.${new Date(nextDate).getFullYear()}`;

       chartData.push({name: nextDateFormat, uv: data[i][1], amt: amt});

       amt -= 100;
       
       nextDate.setDate(nextDate.getDate() + 1);

    }

   return chartData;
}