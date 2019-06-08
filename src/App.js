import React from 'react';
import './App.css';
import ChartContainer from './containers/chartContainer/chartContainer';
import ListContainer from './containers/listContainer/listContainer';



class App extends React.Component {

  render(){
    return (
      <div className="App">
        <ListContainer/>
        <ChartContainer/>
      </div>
    );
  }

}

export default App;
