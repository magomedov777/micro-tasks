import React from 'react'

type ButtonPropsTipe = {
    name: string
    callBack: () => void
}


const Button = (props: ButtonPropsTipe) => {
    const onClickButtonHandler = () => {
      props.callBack()
        
    }
  return (
    <button onClick={onClickButtonHandler}>{props.name}</button>
  )
}


export default Button;