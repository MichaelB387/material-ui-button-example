import React from 'react';


class Button extends React.Component {
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
       console.log(text)
     
     }
     
       
       render() {
     
         return (
           <div className="App">
             <button onClick={ (e) => {this.clickedTrue("true") } }>True</button>
             <button onClick={ (e) => {this.clickedFalse("false") } }>False</button>        
           </div>
         );
       }
     }
   
   export default Button;