import React, { useReducer, useState } from "react";
import { Sub } from "../types";

interface FormStates {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

type FormReducerAction = {
  type: 'change_value'
  payload: {
    inputName:string,
    inputValue: string
  }
} | { //this ^ action or this action type
  type:'clear'
}

const formReducer =(state: FormStates['inputValues'], action: FormReducerAction)=>{
  switch(action.type) {
    case 'change_value':
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]:inputValue
      }
      case 'clear':
        return INITIAL_STATE
  }
}
const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] =
  //   useState<FormStates["inputValues"]>(INITIAL_STATE);
    const [inputValues, dispatch]= useReducer(formReducer, INITIAL_STATE)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    dispatch({ type:'clear'});
  };
  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value}=e.target
    dispatch({
      type:'change_value',
      payload:{
        inputName:name,
        inputValue:value
      }
    })
  };
  const handleClearForm = () => {
    dispatch({ type:'clear'})
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClearForm} type="button">
          Clear form
        </button>
        <button type="submit">Save new subscriber</button>
      </form>
    </div>
  );
};

export default Form;
