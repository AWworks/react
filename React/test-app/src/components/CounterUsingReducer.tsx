import { useReducer } from "react";

type CounterState = {
    count: number;
    error: string | null;
}

type Action = {
    type: "increment" | "decrement",
};

const CounterUsingReducer = () => {
    function reducer(counterState: CounterState, action: Action): CounterState {
        counterState.error = null;

        if (action.type == "increment") {
            if (counterState.count == 5) {
                return {
                    ...counterState,
                    error: "Value cannot go beyond 5",
                };
            }
            return {
                ...counterState,
                count: counterState.count + 1,
            };
        }
        else if (action.type == "decrement") {
            if (counterState.count == 1) {
                return {
                    ...counterState,
                    error: "Value cannot be lessthan 1",
                };
            }
            return {
                ...counterState,
                count: counterState.count - 1,
            };
        }
        else {
            return counterState;
        }
    }

    const initialState: CounterState = {
        count: 1,
        error: null,
    };

    const [counterState, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="text-secondary">
            <h2>Counter App using Use Reducer</h2>
            {counterState.error && (
                <h5 className="alert alert-danger">{counterState.error}</h5>
            )}
            <h4>Count: {counterState.count}</h4>
            <div>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => dispatch({ type: "increment" })}
                >
                    Increment
                </button>
            </div>
            <div>
                {/* Decrement button dispatches decrement action */}
                <button
                    className="btn btn-warning mb-3"
                    onClick={() => dispatch({ type: "decrement" })}
                >
                    Decrement
                </button>
            </div>
        </div>

    );
}
export default CounterUsingReducer;