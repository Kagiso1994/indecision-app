
import React from 'react';
import Option from './Option';
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ol>
                    {this.props.options.length > 0 && this.props.options.map((option) => <Option option={option} key={option} />)}
                </ol>

            </div>
        )
    }
}

export default Options;