import { useReducer } from "react";
import { Sub } from "../types";

interface FormStates {
    inputValues: Sub;
}

type FormReducerAction = {
    type: 'change_value'
    payload: {
      inputName:string,
      inputValue: string
    }
  } | { //this ^ action or this action type
    type:'clear'
}

const INITIAL_STATE = {
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
};

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
  
const useNewSubForm = ()=>{
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm