import React from 'react'

const InputType = ({labelText,lableForm, inputType, value, onChange, name}) => {
  return (
    <>
        <div className="form-outline mb-4">
{/*email*/} <input 
                type={inputType} 
                name={name}
                value={value}
                onChange={onChange}
                className="form-control form-control-lg" />
            <label className="form-label" htmlFor={lableForm}>{labelText}</label>
        </div>
    </>
  )
}

export default InputType