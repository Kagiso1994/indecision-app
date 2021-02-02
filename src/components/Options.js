
import React from 'react';
import Option from './Option';
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <button onClick={props.handleRemoveOption}>Pop Last Option</button>
            {props.options.length === 0 && <p>Please add an option</p>}
            <ol>
                {
                    props.options.length > 0 && props.options.map((option) => 
                        <Option
                            option={option}
                            key={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )}
            </ol>

        </div>
    )
}

export default Options;