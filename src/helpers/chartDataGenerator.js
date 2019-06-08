
export function dateGenerator(date){
    let dateInterval = [];
    let nextDate =  date;
    for(let i = 0; i < 7; ++i ){
    
       let nextDateFormat = `${new Date(nextDate).getDate()}.${new Date(nextDate).getMonth() + 1}.${new Date(nextDate).getFullYear()}`;
       
       nextDate.setDate(nextDate.getDate() + 1);

       dateInterval.push(nextDateFormat);
    }

   return dateInterval;
}