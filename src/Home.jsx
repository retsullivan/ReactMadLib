import React from 'react';
import {UserInput} from './UserInput';
import {MadLibs} from './MadLibs';
import './App.css';
import mainLogo from'./MadLibsLogo.png';

export class Home extends React.Component {

    userInput = new UserInput();
    state = { userInput:"" };

    onWordsSumbitted(input){
        this.setState({userInput:input });
    }
    onSubmit(){
        this.setState({userInput:""});
    }
    
    
    render(){
        
        return<>
            <div>
                <div className="row top">
                    <div className="col-sm-3 logo"> 
                        <img className='mllogo' src={mainLogo}  alt="madliblogo"/> 
                    </div>
                    <div className = "col-sm-9"> 
                        <h1 className='display-1'>React MadLibs</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"> 
                        <UserInput onWordsSumbitted = {x => this.onWordsSumbitted(x)}/>
                    </div>
                    <div className ="col-sm-9 mlBackground"> 
                        {!this.state.userInput && <h3 className="display-4">  Eagerly awaiting your input...</h3>}
                        { this.state.userInput && <MadLibs input = {this.state.userInput}/>}
                        {this.state.userInput &&  <button className="btn btn-success left"
                         onClick={(e => this.onSubmit())}>Reset</button> }
                    </div>
                
                </div>
            </div> 
        </>    
    }
}