
import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.state = {
            options: props.options,
            selectedOption: undefined
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

    handleClearSelectedOption() {
        this.setState(() => ({ selectedOption: undefined }));
    }


    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);

        this.setState(() => ({ selectedOption: option }));



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
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleRemoveOption={this.handleRemoveOption}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                         <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                >
                </OptionModal>
            </div>
        )
    }

}

IndecisionApp.defaultProps = {
    options: []
}



export default IndecisionApp;