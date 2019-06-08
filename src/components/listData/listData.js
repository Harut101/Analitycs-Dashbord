import React from 'react'
import '../listData/listData.css'


const List = (props) => {

  let filterSource = props.filterSource;

    let allCount = 0;
    let midCount = 0;
    let count = 0;
    let maxValue = 0;
    
    for(let i = 0; i < props.data.length; i++){
       if(props.data[i].analytics[filterSource] > maxValue) maxValue = props.data[i].analytics[filterSource];
       allCount += props.data[i].analytics[filterSource]
       count++
    }
   

    midCount = (allCount / count).toFixed();

    return(
       <div className='listBlock'>
       <p className='allInfo'> Все источники и в среднем <span>{allCount.toFixed()}</span> <span>{midCount}</span></p>
         <ul>
             {
                props.data.map((data, index)=>{
                  let progressClass = data.analytics[filterSource] === 0 ? 'zero' : data.analytics[filterSource] < midCount ? 'bad' : 'good';
                  let progressWidth = {width: `${Math.abs( data.analytics[filterSource] - midCount) / maxValue * 100}%`};
                  
                    return(
                        <React.Fragment key={index}>
                        {
                            data.utm_sourcemedium !== '' ? 
                            <div>
                                  <div className='dataName'>
                                    <li key={index}>
                                        {data.utm_sourcemedium}
                                    </li> 
                                  </div>
                                  <div className='dataAnalis'>
                                    <span>{data.analytics[filterSource]}</span>
                                  </div>
                                  <div className={`dataState ${progressClass}`}>

                                    <span className='result'>{ data.analytics[filterSource] === 0 ? 0 :
                                      data.analytics[filterSource] - midCount > 0 
                                      ? `+${(data.analytics[filterSource] - midCount).toFixed()}` : 
                                      `${(data.analytics[filterSource] - midCount).toFixed()}`}</span> 

                                        <span className='block'></span> 
                                        <span className={progressClass} style={progressWidth}></span>
                                      
                          
                                   
                                  </div>
                            </div>
                             : 
                             null
                        }
                        </React.Fragment>
                            
                       
                    )
                })
                
             }
         </ul>
       </div>
    )
}


export default List;
