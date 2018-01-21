import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  margin: 12,
};



class RaisedButtonExampleSimple extends React.Component {

    clickedTrue(text){
        console.log(text)    
     }

     clickedFalse(text){
        console.log(text)    
     }
    render () {
        return (
        <div className="true-false-buttons">
        <MuiThemeProvider>
            <RaisedButton className="button-true" onClick={ (e) => {this.clickedTrue("true") } } label="True" primary={true} style={style} />
        </MuiThemeProvider>
        OR
        <MuiThemeProvider>
            <RaisedButton className="button-false" onClick={ (e) => {this.clickedFalse("false") } } label="False" primary={true} style={style} /> 
        </MuiThemeProvider> 
        </div>                        
        )
    }
}


export default RaisedButtonExampleSimple;