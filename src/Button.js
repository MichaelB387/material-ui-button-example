import React from 'react';


class Button extends Component {
    constructor() {
      super()
      this.state = {
        text: "Make a selection"
      }
    }
    
     clickedTrue(text){
       this.setState({ text: text})
       console.log()
   
    }
   
    clickedFalse(text){
     this.setState({ text: text})
     console.log()
   
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
   
   export default Button;