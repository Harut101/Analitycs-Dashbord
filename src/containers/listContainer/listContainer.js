import React from 'react';
import '../listContainer/listContainer.css';
import Dropdown from '../../components/dropdown/dropdown';
import ListData from '../../components/listData/listData';
import { getData, getDataSource } from '../../store/actions/listDataAction'
import { connect } from 'react-redux'
 

class ListContainer extends React.Component {

  componentDidMount(){
    this.props.getData();
  }

  changeVariant = (value) => {
     this.props.getDataSource(value);
  }

  render(){
    return (
      <div className="ListContainer">
          <div className='dropdown'>
            Оценить по показателю <Dropdown options={['Время','Отказы','Сессии']} onChange={this.changeVariant}/>
          </div>
          <ListData data={this.props.sourceDataLeft} filterSource={this.props.filterSource}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
    return {
      sourceDataLeft: state.listReducer.allDataLeft,
      filterSource: state.listReducer.filterSource,
    }
 }
 
 const mapDispatchToProps = (dispatch) => {
     return {
      getData: () => dispatch(getData()),
      getDataSource: (value) => dispatch(getDataSource(value))
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(ListContainer);
