import React from 'react';
import '../chartContainer/chartContainer.css';
import Charter from '../../components/charter/charter';
import DatePicker from '../../components/datePicker/datePicker';
import {getChartData} from '../../store/actions/chartDataAction'
import {connect} from 'react-redux'


class ChartContainer extends React.Component {

  componentDidMount(){
    this.props.getChartData();
  }

  render(){
    return (
      <div className="ChartContainer">
          <dir className='dateContainer'>
            <DatePicker/> - <DatePicker/>
          </dir>
        <Charter sourceDataRight={this.props.sourceDataRight}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
    return {
      allDataRight: state.chartReducer.allDataRight,
      sourceDataRight: state.chartReducer.sourceDataRight,
    }
 }
 
 const mapDispatchToProps = (dispatch) => {
     return {
      getChartData: () => dispatch(getChartData()),
    
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
