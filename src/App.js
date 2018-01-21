import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
   super()
   this.state = {
     text: "Make a selection"
   }
 }
 
  clickedTrue(text){
    console.log(text)

 }

 clickedFalse(text){
  this.setState({ text: text})
  console.log(text)

}

  
  render() {

    return (
      <div className="App">
      {this.state.text}
        <button onClick={ (e) => {this.clickedTrue("true") } }>True</button>
        <button onClick={ (e) => {this.clickedFalse("false") } }>False</button>        
      </div>
    );
  }
}

export default App;
