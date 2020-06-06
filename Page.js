// Code in Page.js
import React, {Component} from 'react';
// import api js | function
import {asyncCall} from './Api';
class Page extends Component {
    constructor() {
        super();
        // Define states variable
        this.state = {
            postData: []
        };
    }
    /*
    User async and await with componentDidMount
    Reff: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
     */
    async componentDidMount() {
        // Call my custom function from common api
        // user await asyncCall(); to hold for promise return
        const valueA = await asyncCall();
        // Fill data as per your variable in your state
        this.setState({postData: valueA})
    }

    render() {
        // temporary preloader text
        let listItems = "Loading post..";
        // if have length then do what you want with data
        // i am making some html to output
        if (this.state.postData.length) {
            listItems = "";
            listItems = this.state.postData.map((post, index) =>
                <h4 key={index}>{post.title.rendered}</h4>
        );
        }
        return (
            <div>
            <h1>Hello api </h1>
        <div>
        {listItems}
        </div>
        </div>
    );
    }
}

export default Page;