import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const DatePiker = (props) => {
    
    return(
        <DatePicker
            selected={new Date()}
            //onChange={this.handleChange}
          />
    )
}


export default DatePiker;