import {useReducer} from "react"
const reducer = (state, action)=>{
    switch(action.type){
        case 'add':
            return {count: state.count + 1}
        case 'remove':
            return {count: state.count - 1}
        case'reset':
            return {count: 0}
        default:
            throw new Error("Error  in switch statement!")
    }
}
const Counter = ()=>{
    const initialState = {count: 0}
    const[state, dispatch] = useReducer(reducer, initialState)
    return(
        <div className="container">
            <div className="content">
                <h1>Count: {state.count}</h1>
                <button onClick={()=>{dispatch({type: 'add'})}}>Add</button>
                <button onClick={()=>{dispatch({type: 'remove'})}}>Remove</button>
                <button onClick={()=>{dispatch({type: 'reset'})}}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;