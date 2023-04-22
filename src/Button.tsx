import React from 'react'

//universalButton

type ButtonPropsType = {
    callBackAddMessage: () => void
    name: string
};

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBackAddMessage()
    };
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
};
