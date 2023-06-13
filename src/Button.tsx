import React from 'react'

type ButtonPropsType = {
    callBackAddMessage: () => void
    name: string
};

export const Button = (props: ButtonPropsType) => {
    
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
};
