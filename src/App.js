import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Bar from './Bar';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      bars: [] 
       };
  }
  componentDidMount()
  {
    const baseUrl = "https://beermapping.com/webservice";
    const apiKey = " 74d2dc9972a5ba5988ae62b146f65069";
    Axios.get(`${baseUrl}/locquery/${apiKey}/pittsburgh&s=json`)
    .then(res =>{
      console.log(res.data)
      this.setState({
        
        bar: res.data.results
      });
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.bars.map(bar =>{
            return (
              <div className="container">
             <Bar
              key={bar.id}
              id={bar.id}/>

              </div>)
          })
          }
      </div>
    );
  }
}

export default App;