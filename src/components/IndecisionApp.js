
import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state = {
            options: props.options,
            random: -1
        };
    }

    componentDidMount() {

        try {
            const options = JSON.parse(localStorage.getItem("options"));
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem("options", JSON.stringify(this.state.options));
        }
    }

    handleDeleteOptions() {
        /*this.setState(() => {
            return {
                options: []
            };
        });*/

        //New syntax;
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOption() {
        this.setState((prevState) => {
            if (prevState.options.length > 0) {
                prevState.options.pop();
                return {
                    options: prevState.options
                };
            }
        });
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option) }));
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

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This options already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }

    render() {
        //const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleRemoveOption={this.handleRemoveOption}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }

}

IndecisionApp.defaultProps = {
    options: []
}



export default IndecisionApp;