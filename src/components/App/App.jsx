import React from 'react';
import Header from '../Header/Header.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ResultsContainer from '../ResultsContainer/ResultsContainer.jsx';
import './App.css';



const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state={
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };


 /*search box will send the input data and then it updates the headerExpanded state and suggestedNames list*/

    handleInputChange=(inputText)=> {
       this.setState({headerExpanded : !inputText, suggestedNames: inputText ? name(inputText) : [] });
    };


    render(){
        return (
            <>
        <Header  headerExpanded={this.state.headerExpanded}    headTitle={this.state.headerText}/>
        <SearchBox onInputChange={this.handleInputChange}/>
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
        </>
        )
    }
}
export default App



/*headerText and headerExpanded are the props through which tranfer of data from parent to child component is happening*/ 

/*handleInputChange is the fucntion defined in App.jsx but is actually being called in child component(SearchBox)*/