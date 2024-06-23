import React from 'react'

type InputProps = React.HTMLProps<HTMLInputElement>

const InputRange = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <input className='range' type="range" ref={ref} { ...props } />
})

InputRange.displayName = "InputRange"

export default InputRange