import React, { ChangeEvent } from 'react'



export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)

    };
    return (
        <input onChange={onChangeInputHandler} value={props.title} />
    )
};
