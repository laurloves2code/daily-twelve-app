import React, { Component } from 'react';
import '../App.css';


class Quote extends Component {

    state = {
        quote: '',
        author: ''        
    };

    componentDidMount() {
        this.apiQuotes();        
      }

    apiQuotes = async (
        url = `https://quotes.rest/qod?category=inspire`
    ) => {        
        const results = await fetch(url);
        const info = await results.json();
        //console.log(info);              
        //console.log(info.contents.quotes[0].quote);
        //console.log(info.contents.quotes[0].author);        
        this.setState({quote: (info.contents.quotes[0].quote)});
        this.setState({author: (info.contents.quotes[0].author)});
    };
   

    render () {
        return (
            <div className="versebkg">
            <h4 className="quote">"{this.state.quote}"</h4>
            <p>- {this.state.author}</p>      
            <p><a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" className="they-said-so">
                Quotes from They Said So®</a></p>                                   
         </div>
        );
    }
}

export default Quote;