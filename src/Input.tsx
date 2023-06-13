import React, { ChangeEvent, KeyboardEvent } from 'react'

type InputPropsType = {
    setTitle: (title: string) => void
    title: string
    callBackAddMessage: (title: string) => void
};

export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    };

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
        }
    }
    return (
        <input onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler} value={props.title} />
    )
};
