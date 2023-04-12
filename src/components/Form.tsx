import React, { useState } from 'react'
import { Sub } from '../types'
 
interface FormStates {
  inputValues:Sub
} 

interface FormProps {
  onNewSub:(newSub:Sub)=> void
  
}
const Form = ({onNewSub}:FormProps) => {
  const [inputValues, setInputValues]=useState<FormStates['inputValues']>({
    nick:'',
    subMonths:0,
    avatar:'',
    description:''
  })
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onNewSub(subs => ([...subs, inputValues]))
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
      setInputValues({
        ...inputValues,
        //change the input value when the input value has changed
        [e.target.name]:e.target.value
      })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='nick' />
            <input onChange={handleChange} value={inputValues.subMonths} type="text" name='subMonths' placeholder='subMonths' />
            <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder='avatar' />
            <textarea onChange={handleChange} value={inputValues.description}  name='description' placeholder='description' />
            <button>Save new subscriber</button>
        </form>
    </div>
  )
}

export default Form 