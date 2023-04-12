import { useEffect, useState, useRef } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
//interface
import { Sub } from './types'
const INITIAL_STATE = [
  {
    nick:'dapelu',
    subMonths:2,
    avatar:'https://i.pravatar.cc/150?u=dapelu',
    description:'moderador lorem'
  },
  {
    nick:'sergio',
    subMonths:7,
    avatar:'https://i.pravatar.cc/150?u=sergio_serrano'
  }
]

//STATES
interface AppStates {
  subs: Sub[] //OR Array<Sub>
}

function App() {
  const [subs, setSubs]= useState<AppStates['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])
  
  const handleNewSub=(newSub:Sub):void => {
    setSubs(sub => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
     <h1>Title TS + React</h1>
     <List subs={subs}/>
     <Form onNewSub={handleNewSub}></Form>
    </div>
  )
}

export default App
