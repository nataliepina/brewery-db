import React, { Component } from 'react';
import './App.css';
import {GLOBAL} from './Global';
import Axios from 'axios';
import Bar from './Bar';
import mappgh from './maptimepgh_banner.png';
import 'font-awesome/css/font-awesome.min.css';


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
    Axios.get(`${GLOBAL.BASE_URL}/locquery/${GLOBAL.API_KEY}/pittsburgh&s=json`)
    .then(res =>{
      console.log(res.data)
      this.setState({
        
        bars: res.data
      });
    });
  }
  render() {
    return (
      <div className="App">
          <div className="desktop-menu">
            <div className="topnav">
              <a className="active" href="#home"><i class="fa fa-home"></i> Home</a>
              <a href="#breweries"><i class="fa fa-beer"></i> Breweries</a>
              <a href="#search"><i className="fa fa-search"></i> Search</a>
            </div>
          </div>
          <div className="mobile-menu-trigger"><a id="right-menu" href="#right-menu" className="mobile-menu"><i class="fa fa-bars"></i></a></div>
          
          <header>
            <img className="mappgh" src={mappgh}/>
            <div className="title">
              <h1>Brew Finder PGH</h1>
            </div>
            <hr id="colorline"></hr>
          </header>
          {this.state.bars.map(bar =>{
            return (
              <div className="container">
             <Bar
              key={bar.id}
              id={bar.id}
              name={bar.name}
              street={bar.street}
              phone={bar.phone}
              status={bar.status}
              url={bar.url}
              />
              </div>)
          })
          }
      </div>
    );
  }
}

export default App;