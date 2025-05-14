import { useState } from "react";

const LiveUpdate = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <h1>Live Update</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <p>{text}</p>
        </div>
    );
}

export default LiveUpdate