import React, { ChangeEvent } from 'react'

type InputPropsType = {
    setTitle: (title: string) => void
    title: string
}
const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    }
    return (
        <input onChange={onChangeHandler} value={props.title} />
    )
}




export default Input;