import { useState } from 'react';
interface CounterProps {
    title: string;
    initialCount?: number;
}

function Counter(props: CounterProps) {
    const [count, setCount] = useState(props.initialCount || 0);
    return (
        <div className="card border-info m-3">
            <h1 className="text-warning m-3">{props.title}</h1>
            <div>
                <button onClick={() => setCount(count < 100 ? count + 1: count)}>Increment</button>
            </div>
            <div>
                <button onClick={() => setCount(count > 0 ? count - 1: count)}>Decrement</button>
            </div>
            <h4>
                Count: <span className="badge bg-primary">{count}</span>
            </h4>
        </div>
    );
}
export default Counter;