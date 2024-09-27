import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('Unknown action type');
    }
}

const Cart = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="container">
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>Cart</th>
                            <th>Add</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Count: {state.count}</td>
                            <td>
                                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                            </td>
                            <td>
                                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;
