import React from 'react'



export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBackAddMessage()
    };
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
};
