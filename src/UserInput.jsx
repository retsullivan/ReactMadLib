import React from 'react';
import {Input} from "./models";
import './App.css';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class UserInput extends React.Component{

    state = {
        word1:"",
        word2:"",
        word3:"",
        word4:"",
        word5:"",
        word6:""
    };

    
    render(){
        return<>
            <div>
                    <form className="myForm">
                    <h4 className="display-6"> Enter Your Words:</h4>
                        <div className="d-flex">
                            <div className="form-group">
                                <label for="word1">Verb (present participle)</label>                
                                <input type="text"
                                id="word1"
                                name="word1"
                                className="form-control" 
                                value={this.state.word1}
                                onChange={e =>this.setState({word1:e.target.value})}/>                   
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group">
                                <label for="word2">verb (future "will ___")</label>                
                                <input type="text"
                                id="word2"
                                name="word2"
                                className="form-control" 
                                value={this.state.word2}
                                onChange={e =>this.setState({word2:e.target.value})}/>                   
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group">
                                <label for="word3">Noun</label>                
                                <input type="text"
                                id="word3"
                                name="word3"
                                className="form-control" 
                                value={this.state.word3}
                                onChange={e =>this.setState({word3:e.target.value})}/>                   
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group">
                                <label for="word4">Adjective (scent)</label>                
                                <input type="text"
                                id="word4"
                                name="word4"
                                className="form-control" 
                                value={this.state.word4}
                                onChange={e =>this.setState({word4:e.target.value})}/>                   
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group">
                                <label for="word5">Adjective (appearance)</label>                
                                <input type="text"
                                id="word5"
                                name="word5"
                                className="form-control" 
                                value={this.state.word5}
                                onChange={e =>this.setState({word5:e.target.value})}/>                   
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group">
                                <label for="word6">Verb (present action)</label>                
                                <input type="text"
                                id="word6"
                                name="word6"
                                className="form-control" 
                                value={this.state.word6}
                                onChange={e =>this.setState({word6:e.target.value})}/>                   
                            </div>
                        </div>
                    </form>
                    <button
                    className="btn btn-outline-success btn-block"
                    onClick={(e => this.onSubmit())}>
                        Submit
                    </button>
                </div>
        </>
    }

    onSubmit(){
        this.props.onWordsSumbitted(new Input(this.state.word1,this.state.word2,this.state.word3,this.state.word4,this.state.word5,this.state.word6));
        this.setState(
        {word1:"",
        word2:"",
        word3:"",
        word4:"",
        word5:"",
        word6:""});
    }

}