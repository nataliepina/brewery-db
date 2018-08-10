import React,{Component} from 'react';
import Axios from 'axios';


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
        const baseUrl = "https://beermapping.com/webservice";
        const apiKey = " 74d2dc9972a5ba5988ae62b146f65069";
            Axios.get(`${baseUrl}/locquery/${apiKey}/pittsburgh&s=json`)
            .then(res => {
            this.setState({
                bars: res.data.results,
                hasDetails: true})
            });
    }
    render() { 
        let image = ``
        if(this.state.hasDetails)
        return ( 
            <div className="message">
            {/* <img src={image} /> */}
            <h1>{this.props.title}</h1>
            <p>{this.props.overview}</p>
            </div>
        );

        else{
            return (
                <div>
                {/* <img src={image} /> */}
                <h1>{this.props.title}</h1>
                <button onClick={this.handleClick}>Get Details</button>
                </div>);

            }
    }
}
export default Bar;