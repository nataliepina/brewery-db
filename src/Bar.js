import React,{Component} from 'react';
import Axios from 'axios';
import {GLOBAL} from './Global';
import beermugs from './beermugs.svg';


class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: [],
            hasDetails: false,
         };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick()
    {
            Axios.get(`${GLOBAL.BASE_URL}/locquery/${GLOBAL.API_KEY}/pittsburgh&s=json`)
            .then(res => {
            this.setState({
                bars: res.data.results,
                hasDetails: true})
            });
    }
    render() { 
        let image = ``;
        if(this.state.hasDetails)
        return ( 
            <div className="brewery-info">
                <img id="beer-logo" src={beermugs}/>
                <h2 className="brewtitle">{this.props.name}</h2>
                <p>{this.props.phone}</p>
                <p>{this.props.status}</p>
                <p>{this.props.street}</p>
                <p>{this.props.url}</p>
            </div>
        );

        else{
            return (
                <div className="brewery-info">
                    <img id="beer-logo" src={beermugs}/>
                    <h2 className="brewtitle">{this.props.name}</h2>
                    <button onClick={this.handleClick}> DETAILS <i class="fa fa-arrow-down"></i> </button>
                </div>);
            }
    }
}
export default Bar;