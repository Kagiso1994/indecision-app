
import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: [],
            random: -1
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);

        /*this.setState(() => {
            return {
                random: option
            }
        })*/



    }

    handleAddOption(option) {

        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)  > -1){
            return 'This options already exists';
        }
        
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        console.log(this.props)
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

export default IndecisionApp;