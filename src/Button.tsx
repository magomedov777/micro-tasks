import React from 'react'

//universalButton



export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBackAddMessage()
    };
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
};
