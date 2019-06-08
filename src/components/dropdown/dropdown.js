import React from 'react';
import '../dropdown/dropdown.css';

const Select = props => {
    let id = `Select-${(Date.now())}`;
    
    return(
        <div className={`Select`}>
            {/* <label htmlFor={id}>{props.label}</label> */}
            <select name="select" id={id} onChange={(e) => props.onChange(e.target.value)} >
                    {
                      props.options.map((option, index) => {
                         return(
                            <option value={option} key={index}>
                                {option}
                            </option>
                         )
                      })
                    }
            </select>
        </div>
    )
}


export default Select

