
import React from 'react';
const Option = (props) => {
    return (
        <div><li>{props.option}</li><button
            onClick={(e) => {
                props.handleDeleteOption(props.option)
            }}
        >
            Delete Option
        </button>
        </div>
    )
}

export default Option;